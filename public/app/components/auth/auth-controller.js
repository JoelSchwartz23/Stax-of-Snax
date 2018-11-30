
let _authService = {}

function drawUserLogin() {
  console.log('Not Logged In')
  document.getElementById('login').innerHTML = `
  <button class="btn btn-primary" onclick="app.controllers.authController.login()">Log In</button>
  `
}

function drawLogout() {
  console.log('logged in')
  document.getElementById('login').innerHTML = `<button class="btn btn-success" onclick="app.controllers.authController.logout()">Log Out</button>`
}


export default class AuthController {
  constructor(auth) {
    _authService = auth
    _authService.authenticate(drawLogout)
  }

  showLoginForm() {
    let template = `
    <h1>LOG IN HERE</h1>
  <form onsubmit="app.controllers.authController.login(event)">
    <div class="form-group">
      <label for="usernameInput">Username</label>
      <input name="username" type="text" class="form-control" id="usernameInput">
   </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" name="password" class="form-control" id="passwordInput">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
    document.getElementById('main-content').innerHTML = template
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
    let template = `
    <h1>SIGN UP HERE</h1>
  <form>
  <div class="form-group" onsubmit="app.controllers.authController.register(event)">
      <label for="usernameInput">Username</label>
      <input type="text" name="username" class="form-control" id="usernameInput">
   </div>
    <div class="form-group">
      <label for="emailInput">Email Address</label>
      <input type="email" name="email" class="form-control" id="emailInput">
        <small class="form-text text-muted">We'll never share your email with anyone</small>
   </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" name="password" class="form-control" id="passwordInput">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
    document.getElementById('main-content').innerHTML = template
  }

  register(event) {
    event.preventDefault();
    let creds = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log('registered!')
    _authService.register(creds, drawLogout)
  }

}