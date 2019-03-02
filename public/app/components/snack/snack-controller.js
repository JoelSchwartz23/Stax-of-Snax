import SnackService from "./snack-service.js"

let _auth = {}
let _ss = new SnackService()
let snacks = []

function getSnacks() {
  _ss.getSnacks(drawSnackData)
}


export default class SnackController {
  constructor(auth) {
    _auth = auth
    _ss.getSnacks(this.drawSnackData)
  }

  rerender() {
    document.getElementById('main-content').hidden = false
    document.getElementById("snack-details").innerHTML = ``

  }

  drawSnackData() {
    document.getElementById('main-content').hidden = false
    document.getElementById("snack-details").innerHTML = ``
    let template = ""
    // debugger
    console.log("hello")
    snacks = _ss.snacks
    snacks.forEach(snack => {
      template += snack.getSnackTemplate()
    })
    document.getElementById('main-content').innerHTML = template
  }

  showUser() {
    console.log(_auth.user)
  }
  addSnackForm() {
    let template = `
    <h2 class="mt-4">Add a Snack</h2>
    <form onsubmit="app.controllers.snackController.addSnackData(event)">
    <div class="form-group">
    <label>Img Url</label>
    <input name="imgURL" type="text" class="form-control" id="addSnackForm">
    </div>
    <div class="form-group">
    <label>Name</label>
    <input name="name" type="text" class="form-control" id="addSnackForm">
    </div>
    <div class="form-group">
    <label>Brand</label>
    <input name="snackBrand" type="text" class="form-control" id="addSnackForm">
    </div>
    <div class="form-group">
    <label>Description</label>
    <input name="snackDesc" type="text" class="form-control" id="addSnackForm">
    </div>
    <div class="form-group">
    <label>Price</label>
    <input name="snackPrice" type="number" step="0.01" class="form-control" id="addSnackForm">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
    document.getElementById('main-content').innerHTML = template
  }

  addSnackData(event) {
    event.preventDefault()
    let data = {
      img: event.target.imgURL.value,
      name: event.target.name.value,
      brand: event.target.snackBrand.value,
      price: event.target.snackPrice.value,
      description: event.target.snackDesc.value
    }
    _ss.addSnack(data, getSnacks)
  }

  snackDetails(snackId) {
    document.getElementById('main-content').hidden = true
    let selected = _ss.snacks.find(s => s._id == snackId)
    let template = selected.getDetailedTemplate(_ss.comments[snackId])
    document.getElementById('snack-details').innerHTML = template
  }
  rateSnack(userRating, snackId) {
    _ss.rateSnack(this.drawSnackData, snackId, { rating: userRating })
  }

  addComment(event, snackId) {
    event.preventDefault()
    let data = {
      description: event.target.description.value
    }
    console.log(snackId, event.target.description.value);
    _ss.addComment(data, snackId, this.drawSnackData)
  }
  reply(event, commentId) {
    event.preventDefault()
    let data = {
      description: event.target.description.value
    }
    _ss.reply(data, commentId, this.drawSnackData)
  }
}