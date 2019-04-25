export const elements = {
  searchForm: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  recipeResultList: document.querySelector(".results__list"),
  leftPanel: document.querySelector(".results"),
  loadButtonsArea: document.querySelector(".results__pages"),
  recipe: document.querySelector(".recipe"),
  shopping: document.querySelector(".shopping__list"),
  loader: "loader"
};

export const renderLoader = parent => {
  const loader = `
      <div class="loader">
        <svg>
          <use href="img/icons.svg#icon-cw"></use>
        </svg>
      </div>
    `;

  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elements.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
