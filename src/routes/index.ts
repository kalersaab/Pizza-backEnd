import { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { ApiRoute } from "./api/user.route";

class AppRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use("/api", new ApiRoute().router);

    // Handle unknown routes with a 404 error
    this.router.use(
      "/api",
      (req: Request, res: Response, next: NextFunction) => {
        next(
          createError.NotFound(
            "The route you are trying to access does not exist."
          )
        );
      }
    );
  }
}

export default new AppRouter().router;
