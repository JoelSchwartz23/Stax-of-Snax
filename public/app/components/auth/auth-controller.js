
let _authService = {}


function drawUserLogin() {
  console.log('Not Logged In')
  document.getElementById('login').innerHTML = `
  <button class="btn btn-primary" onclick="app.controllers.authController.showLoginForm()">Log In</button>
  `
  document.getElementById('signUp').innerHTML = `<button class="btn btn-primary" onclick="app.controllers.authController.showSignUpForm()">Sign Up</button>`
}

function drawLogout() {
  console.log('logged in')
  document.getElementById('login').innerHTML = `<button class="btn btn-success" onclick="app.controllers.authController.logout()">Log Out</button>`
  document.getElementById('signUp').innerHTML = ``
  document.getElementById('loginStuff').innerHTML = ``
}


export default class AuthController {
  constructor(auth) {
    _authService = auth
    _authService.authenticate(drawLogout)
  }

  showLoginForm() {
    let template = `
    <h4 class="d-flex">LOG IN HERE</h4>
  <form class="mx-3" onsubmit="app.controllers.authController.login(event)">
    <div class="form-group">
      <label for="usernameInput"><b>Username</b</label>
      <input name="username" type="text" class="form-control" id="usernameInput">
   </div>
      <div class="form-group">
        <label for="passwordInput"><b>Password</b</label>
        <input type="password" name="password" class="form-control" id="passwordInput">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
    document.getElementById('loginStuff').innerHTML = template
  }

  login(event) {
    event.preventDefault()
    let creds = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    _authService.login(creds, drawLogout)
  }

  logout() {
    _authService.logout(drawUserLogin)

  }

  showSignUpForm() {
    // debugger
    let template = `
    <h4>SIGN UP HERE</h4>
  <form onsubmit="app.controllers.authController.register(event)">
  <div class="form-group" >
      <label for="usernameInput"><b>Username</b></label>
      <input type="text" name="username" class="form-control" id="usernameInput">
   </div>
    <div class="form-group">
      <label for="emailInput"><b>Email Address</b></label>
      <input type="email" name="email" class="form-control" id="emailInput">
        <small class="registerform"><b>We'll never share your email with anyone</b></small>
   </div>
      <div class="form-group">
        <label for="passwordInput"><b>Password</b></label>
        <input type="password" name="password" class="form-control" id="passwordInput">
    </div>
        <button type="submit" class="btn">Submit</button>
</form>
`
    document.getElementById('loginStuff').innerHTML = template

  }

  register(event) {
    event.preventDefault();
    // debugger
    let creds = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log('registered!')
    _authService.register(creds, drawLogout)
  }

}