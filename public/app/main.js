import AuthService from "./components/auth/auth-service.js";
import AuthController from "./components/auth/auth-controller.js"
import SnackController from "./components/snack/snack-controller.js"
import TheSnackController from "./components/theSnack/theSnack-controller.js"

let auth = new AuthService()



class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(auth),
      snackController: new SnackController(auth),
      theSnackController: new TheSnackController(auth)

    }
  }
}

// @ts-ignore
window.app = new App()