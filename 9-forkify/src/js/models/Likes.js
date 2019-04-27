export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, author, img) {
    const like = { id, title, author, img };
    this.likes.push(like);
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    console.log("this index:" + index);
    this.likes.splice(index, 1);
  }

  isLiked(id) {
    console.log(id);
    return this.likes.findIndex(el => el.id === id) == -1;
  }

  getNumberLikes() {
    return this.likes.length;
  }
}
