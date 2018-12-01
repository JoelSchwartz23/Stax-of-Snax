import TheSnackService from "./theSnack-Service.js"

let _auth = {}
let _tss = new TheSnackService()

export default class TheSnackController {
  constructor(auth) {
    _auth = auth
  }
}