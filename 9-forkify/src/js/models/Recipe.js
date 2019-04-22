import axios from "axios";
import { url, key } from "../config";

export default class Recipe {
  constructor(recipeId) {
    this.recipeId = recipeId;
  }

  async getRecipe() {
    try {
      const result = await axios.get(
        `${url}get?key=${key}&rId=${this.recipeId}`
      );
      this.title = result.data.recipe.title;
      this.author = result.data.recipe.publisher;
      this.img = result.data.recipe.image_url;
      this.url = result.data.recipe.source_url;
      this.ingredients = result.data.recipe.ingredients;
    } catch (error) {
      alert(error);
    }
  }

  calcTime() {
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
}
