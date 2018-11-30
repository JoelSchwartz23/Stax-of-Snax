// @ts-ignore
let _snackApi = axios.create({
  baseURL: "/api/snax",
  withCredentials: true
})

let _snacks = []

export default class SnackService {

  getSnacks(callback) {
    _snackApi.get('').then(res => {
      console.log(res.data)
      _snacks = res.data
      callback()
    })
  }

  get snacks() {
    return _snacks
  }

}