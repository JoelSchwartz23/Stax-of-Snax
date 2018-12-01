export default class Snack {
  constructor(data) {
    this._id = data._id
    this.img = data.img
    this.name = data.name
    this.ratings = data.ratings
    this.rating = 0
    data.ratings.forEach(ratingObj => {
      this.rating += ratingObj.rating
    });
    if (this.rating) {
      this.rating = Math.floor(this.rating / data.ratings.length)
    }

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
      
    <div class=" my-1 col-sm-12 col-md-6 col-lg-3">
      <div class="card">
        <img height="300vh" width="100vh" class="card-img-top" src="${this.img}" onclick="app.controllers.snackController.snackDetails('${this._id}')">
        <div class="card-body">
          <h5 class="snacktext"strong>${this.name}</strong> </h5>
          <span class="cookies" id="rating">${cookies} (${this.ratings.length})</span>
        </div>
      </div>
     </div>
     `
  }

  getDetailedTemplate(comments) {
    let commentTemplate = ''
    if (comments) {
      comments.forEach(c => commentTemplate += `<li>${c.description} - ${c.username}<form onsubmit="app.controllers.snackController.reply(event)">
            <div class="form-group">
              <label for="replyCommentDescription">reply</label>
              <input name="description" class="form-control" rows="3"></input>
            </div>
            <button type="submit" class="btn btn-success">Add Comment</button>
            </form><button onclick="app.controllers.snackController.reply()"> reply </button></li>`)
    }
    let cookies = ''
    for (let r = 0; r < this.rating; r++) {
      cookies += `<i class="fas fa-cookie-bite" onclick="app.controllers.snackController.rateSnack(${r + 1}, '${this._id}')"></i>`
    }
    // debugger
    if (this.rating < 5) {
      for (let r = 1; r <= 5 - this.rating; r++) {
        cookies += `<i class="fas lighten fa-cookie-bite" onclick="app.controllers.snackController.rateSnack(${r + this.rating}, '${this._id}')"></i>`
      }
    }
    return `
     
    <div class="row d-flex justify-content-center">
    <div class=" my-1 col-sm-12 col-md-6 col-lg-3">
    <img class="snackimg" src="${this.img}" onclick="app.controllers.snackController.snackDetails('${this._id}')">
    </div>
    </div>
    <div class="row">
        <div class="col-12 snackcomments">
          <p>${this.name} </p>
          <span id="rating">${cookies} (${this.ratings.length})</span>
          <form onsubmit="app.controllers.snackController.addComment(event, '${this._id}')">
            <div class="form-group">
              <label for="commentDescription">Comment</label>
              <textarea name="description" class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Add Comment</button>
            </form>
          <ul>${commentTemplate}</ul>
        </div>
     </div>
     `

  }
}