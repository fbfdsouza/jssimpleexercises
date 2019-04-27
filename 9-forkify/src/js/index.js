import Search from "./models/Search";
import Recipe from "./models/Recipe";
import Likes from "./models/Likes";
import ShoppingList from "./models/ShoppingList";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as shoppingListView from "./views/shoppingListView";

import { elements, renderLoader, clearLoader } from "./views/base";

const state = {};

//Search Controller
const controlSearch = async () => {
  //Get query from UI
  const query = "cake"; //Todo

  if (query) {
    //2 New search object and add to state
    state.search = new Search(searchView.getInput());

    //Prepare UI for results
    searchView.clearInputField();
    searchView.clearRecipeList();
    renderLoader(elements.leftPanel);

    //4 Search for recipes
    await state.search.getResults();
    try {
      //5 Render results on UI
      searchView.listRecipes(state.search.recipes);
      clearLoader();
    } catch (error) {
      console.log(error);
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.loadButtonsArea.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto);
    searchView.clearRecipeList();
    searchView.listRecipes(state.search.recipes, goToPage);
  }
});

//Recipe Controller

const controlRecipe = async () => {
  const id = window.location.hash.replace("#", "");

  if (id) {
    state.recipe = new Recipe(id);
    renderLoader(elements.recipe);

    recipeView.clearRecipeView();

    if (state.search) searchView.highlightSelected(id);

    try {
      await state.recipe.getRecipe();
      clearLoader();
      state.recipe.calcTime();
      state.recipe.calcServings();
      state.recipe.parseIngredients();
      recipeView.renderRecipe(state.recipe);
    } catch (error) {
      clearLoader();
      console.log(error);
    }
  }
};

window.addEventListener("hashchange", controlRecipe);

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

elements.recipe.addEventListener("click", e => {
  if (e.target.matches(".btn-decrease, .btn-decrease *")) {
    if (state.recipe.servings > 1) state.recipe.updateServings("dec");
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches(".btn-increase, .btn-increase *")) {
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches(".recipe_btn--add, .recipe_btn--add *")) {
    controlShoppingList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    controlLikes();
  }
});

const controlShoppingList = () => {
  //create a new list if there is none yet
  if (!state.list) state.list = new ShoppingList();

  //add each ingredient to the list
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    shoppingListView.renderItem(item);
  });
};

elements.shopping.addEventListener("click", e => {
  const id = e.target.closest("li").dataset.itemid;

  if (e.target.matches(".shopping__delete, .shopping__delete *")) {
    state.list.deleteItem(id);
    shoppingListView.deleteItem(id);
  } else if (e.target.matches(".shopping__count__count-value")) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

//controlLike

const controlLikes = () => {
  if (!state.likes) state.likes = new Likes();

  if (state.likes.isLiked(state.recipe.recipeId)) {
    state.likes.addLike(
      state.recipe.recipeId,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
  } else {
    state.likes.deleteLike(state.recipe.recipeId);
  }

  console.log(state.likes);
};
