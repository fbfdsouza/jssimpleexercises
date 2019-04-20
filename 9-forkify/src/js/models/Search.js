import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const url = "https://www.food2fork.com/api/search/";
    const key = "eb9625a82fb069e78cf56d54c1dee5a0";

    try {
      const result = await axios(`${url}?key=${key}&q=${this.query}`);
      this.recipes = result.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
