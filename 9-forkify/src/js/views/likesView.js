import { elements } from "./base";
import { limitRecipeTitle } from "./searchView";

export const toggleLike = isLiked => {
  //icons.svg#icon-heart-outlined">

  const changeHeartStyle = isLiked
    ? `img/icons.svg#icon-heart`
    : `img/icons.svg#icon-heart-outlined`;

  document
    .querySelector(".recipe__love use")
    .setAttribute("href", changeHeartStyle);
};

export const toggleLikeMenu = numberLikes => {
  elements.likesMenu.style.visibility = numberLikes > 0 ? "visible" : "hidden";
};

export const renderLike = like => {
  const markup = `
  <li  data-likeId=${like.id}>
    <a class="likes__link" href="#${like.id}">
        <figure class="likes__fig">
            <img src="${like.img}" alt="${like.title}">
        </figure>
        <div class="likes__data">
            <h4 class="likes__name">"${limitRecipeTitle(like.title)}"</h4>
            <p class="likes__author">${like.author}</p>
        </div>
    </a>
  </li>`;

  elements.likesList.insertAdjacentHTML("beforeend", markup);
};

export const deleteLike = id => {
  const item = document.querySelector(`[data-likeId="${id}"]`);
  item.parentElement.removeChild(item);
};
