import Snack from "../../models/snack.js";

// @ts-ignore
let _snackApi = axios.create({
  baseURL: "/api/snax",
  withCredentials: true
})

let _snacks = []

export default class SnackService {

  getSnacks(drawSnackData) {
    _snackApi.get('').then(res => {
      console.log(res.data)
      _snacks = res.data.map(s => new Snack(s))
      drawSnackData()
    })
  }

  get snacks() {
    return _snacks
  }

  addSnack(data, getSnacks) {
    debugger
    _snackApi.post('', data)
      .then(res => {

        getSnacks()
      })
  }
}