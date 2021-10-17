import HomeRoute from "./homeRoute.js";

export default function routes(app) {
    app.use("/", HomeRoute)
}