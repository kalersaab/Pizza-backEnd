import { Router } from "express";
import { UserService } from "../../controller/user/user";
export class ApiRoute {
  public router: Router;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.post("/register", UserService.createUser);
  }
}
