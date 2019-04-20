import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

const renderRecipes = el => {
  const listItem = `<li>
    <a class="results__link" href="#${el.recipe_id}">
        <figure class="results__fig">
            <img src="${el.image_url}" alt="${el.image_url}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${el.title}</h4>
            <p class="results__author">${el.publisher}</p>
        </div>
    </a>
</li>`;

  elements.recipeResultList.insertAdjacentHTML("beforeend", listItem);
};

export const listRecipes = recipes => {
  recipes.forEach(renderRecipes);
};

export const clearInputField = () => (elements.searchInput.value = "");

export const clearRecipeList = () => (elements.recipeResultList.innerHTML = "");
