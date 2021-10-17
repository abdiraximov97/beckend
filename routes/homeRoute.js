import { Router } from "express";
import HomeController from "../controller/homeController.js";

const HomeRoute = Router();

HomeRoute.get("/", HomeController.HomeRouteGetController);



export default HomeRoute;