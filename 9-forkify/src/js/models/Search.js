import axios from "axios";
import { url, key } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    try {
      const result = await axios(`${url}search?key=${key}&q=${this.query}`);
      this.recipes = result.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
