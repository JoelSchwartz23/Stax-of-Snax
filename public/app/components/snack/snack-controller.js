import SnackService from "./snack-service.js"

let _auth = {}
let _ss = new SnackService()
let snacks = []

function getSnacks() {
  _ss.getSnacks(drawSnackData)
}

function drawSnackData() {
  let template = ""
  snacks = _ss.snacks
  snacks.forEach(snack => {
    template += snack.getSnackTemplate()
  })
  document.getElementById('main-content').innerHTML = template
}

export default class SnackController {
  constructor(auth) {
    _auth = auth
    _ss.getSnacks(drawSnackData)
  }

  showUser() {
    console.log(_auth.user)
  }
  addSnackForm() {
    let template = `
    <h2>Add a Snack</h2>
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
        <input name="snackBrand" type="text" class="form-control" id="addSnackForm">
        <label>Brand</label>
      </div>
      <div class="form-group">
        <label>Description</label>
        <input name="snackDesc" type="text" class="form-control" id="addSnackForm">
      </div>
      <div class="form-group">
      <label>Price</label>
      <input name="snackPrice" type="number" step="0.01" class="form-control" id="addSnackForm">
      </div>
      <button class="btn btn-primary">Submit</button>
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

}