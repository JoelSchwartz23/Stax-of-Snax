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
  addSnack() {
    _ss.addSnack(getSnacks)
  }
}