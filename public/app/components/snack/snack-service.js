import Snack from "../../models/snack.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "/api/",
  withCredentials: true
})

let _snacks = []
let _comments = {
  //key snackId : value [comments]
}

export default class SnackService {

  getSnacks(drawSnackData) {
    _api.get('snax').then(res => {
      console.log(res.data)
      _snacks = res.data.map(s => new Snack(s))
      this.getComments(drawSnackData)
    })
  }

  get snacks() {
    return _snacks
  }

  addSnack(data, getSnacks) {
    // debugger
    _api.post('snax', data)
      .then(res => {

        getSnacks()
      })
  }

  singleSnack() {

  }
  //// COMMENTS REQUESTS
  get comments() {
    return _comments
  }
  getComments(draw) {
    _api.get('comments')
      .then(res => {
        res.data.forEach(comment => {
          if (!comment.snackId) { return }

          if (!_comments[comment.snackId]) {
            _comments[comment.snackId] = []
          }
          _comments[comment.snackId].push(comment)
        })
        console.log(_comments)
        draw()
      })
  }
}