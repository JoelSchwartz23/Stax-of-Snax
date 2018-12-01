import Snack from "../../models/snack.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "/api",
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
      _snacks.sort((a, b) => b.rating - a.rating)
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
        console.log(data)
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
        _comments = {}
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

  rateSnack(callback, snackId, userRating) {
    _api.put('ratings/' + snackId, userRating)
      .then(res => {
        this.getSnacks(callback)
      })
  }

  addComment(data, snackId, callback) {
    _api.post('comments/' + snackId, data)
      .then(res => {
        this.getSnacks(callback)
      })
  }

}