import Express from "express";
import path from "path";
import database from "./modules/database.js";
import routes from "./routes/routes.js";

const __dirname = path.resolve();

const app = Express();
const port = 8080;

app.listen(port, () => {
    console.log(`server ${port} - portda yondi`);
});

async function server() {
    try {
        database();
    } catch (error) {
        
    } finally {
        routes(app);
    }
};

server();