import SnackService from "./snack-service.js"

let _auth = {}
let _ss = new SnackService()

function drawSnackData() {
  let template = ""
  _ss.snacks.forEach(snack => {
    template += `
     <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="${snack.img}">
          <div class="card-body">
            <p>${snack.name} ${console.log(snack.ratings)}</p>
            <span><i class="fas fa-cookie-bite"></i></span>
            <span><i class="fas fa-cookie-bite"></i></span>
            <span><i class="fas fa-cookie-bite"></i></span>
            <span><i class="fas fa-cookie-bite"></i></span>
          </div>
        </div>
      </div>
    
    `
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

}