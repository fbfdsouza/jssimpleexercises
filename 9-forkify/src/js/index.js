import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

const state = {};

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

    //5 Render results on UI
    searchView.listRecipes(state.search.recipes);
    clearLoader();
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
