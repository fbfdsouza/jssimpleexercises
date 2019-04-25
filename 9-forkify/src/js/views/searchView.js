import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInputField = () => (elements.searchInput.value = "");

export const clearRecipeList = () => {
  elements.recipeResultList.innerHTML = "";
  elements.loadButtonsArea.innerHTML = "";
};

export const highlightSelected = id => {
  const resultArray = Array.from(document.querySelectorAll(".results_link"));
  resultArray.forEach(el => el.classList.remove("results_link--active"));

  document
    .querySelector(`a[href="#${id}"]`)
    .classList.add("results__link--active");
};

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) newTitle.push(cur);
      return acc + cur.length;
    }, 0);

    return `${newTitle.join(" ")}...`;
  }
  return title;
};

const renderRecipes = el => {
  const listItem = `<li>
    <a class="results__link" href="#${el.recipe_id}">
        <figure class="results__fig">
            <img src="${el.image_url}" alt="${el.image_url}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(el.title)}</h4>
            <p class="results__author">${el.publisher}</p>
        </div>
    </a>
</li>`;

  elements.recipeResultList.insertAdjacentHTML("beforeend", listItem);
};

const createButton = (page, type) => `
  <button class="btn-inline results__btn--${type}" data-goto=${
  type === "prev" ? page - 1 : page + 1
}>
  <span>${type === "prev" ? page - 1 : page + 1}</span>
      <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-${
            type === "prev" ? "left" : "right"
          }"></use>
      </svg>
  </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = numResults / resPerPage;

  let button;
  if (page === 1 && pages > 1) button = createButton(page, "next");
  else if (page < pages)
    button = `${createButton(page, "prev")}
                ${createButton(page, "next")}`;
  else if (page === pages) button = createButton(page, "prev");

  elements.loadButtonsArea.insertAdjacentHTML("afterbegin", button);
};

export const listRecipes = (recipes, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  recipes.slice(start, end).forEach(renderRecipes);

  renderButtons(page, recipes.length, resPerPage);
};
