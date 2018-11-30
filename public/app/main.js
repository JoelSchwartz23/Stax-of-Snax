import AuthService from "./components/auth/auth-service.js";
import AuthController from "./components/auth/auth-controller.js"

let auth = new AuthService()



class App {
  constructor() {
    this.controllers = {
      authController: new AuthController()

    }
  }
}

// @ts-ignore
window.app = new App()