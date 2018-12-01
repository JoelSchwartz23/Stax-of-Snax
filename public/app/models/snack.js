export default class Snack {
  constructor(data) {
    this.img = data.img
    this.name = data.name
    this.ratings = data.ratings
    this.rating = 0
    data.ratings.forEach(ratingObj => {
      this.rating += ratingObj.rating
    });
    this.rating = Math.floor(this.rating / data.ratings.length)
  }

  getSnackTemplate() {
    let cookies = ''
    for (let r = 0; r < this.rating; r++) {
      cookies += `<i class="fas fa-cookie-bite"></i>`
    }
    if (this.rating < 5) {
      for (let r = 0; r < 5 - this.rating; r++) {
        cookies += `<i class="fas lighten fa-cookie-bite"></i>`
      }
    }
    return `
     <div class="card-deck mx-1">
      <div class="card">
        <img class="card-img-top" src="${this.img}">
        <div class="card-body">
          <p>${this.name} </p>
          <span id="rating">${cookies} (${this.ratings.length})</span>
        </div>
      </div>
     </div>
     `

  }
}