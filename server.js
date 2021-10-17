import Express from "express";
import path from "path";
import database from "./modules/database.js";

const __dirname = path.resolve();

const app = Express();
const port = 8080;

app.listen(port, () => {
    console.log(`server ${port} - portda yondi`);
});

async function server() {
    database();
};

server();