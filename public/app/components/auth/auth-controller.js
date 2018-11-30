

let _authService = {}



function drawUserLogin() {
  console.log('Not Logged In')
  document.getElementById('login').innerHTML = `
  

  `
}


export default class AuthController {
  constructor() {

  }

  showLoginForm() {
    let template = `
    <h1>LOG IN HERE</h1>
  <form>
    <div class="form-group">
      <label for="emailInput">Email Address</label>
      <input type="email" class="form-control" id="emailInput">
        <small class="form-text text-muted">We'll never share your email with anyone</small>
   </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" class="form-control" id="passwordInput">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
    document.getElementById('main-content').innerHTML = template
  }

  showSignUpForm() {
    let template = `
    <h1>SIGN UP HERE</h1>
  <form>
  <div class="form-group">
      <label for="usernameInput">Username</label>
      <input type="text" class="form-control" id="usernameInput">
   </div>
    <div class="form-group">
      <label for="emailInput">Email Address</label>
      <input type="email" class="form-control" id="emailInput">
        <small class="form-text text-muted">We'll never share your email with anyone</small>
   </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" class="form-control" id="passwordInput">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
    document.getElementById('main-content').innerHTML = template
  }

}