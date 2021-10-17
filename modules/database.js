import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/common_beckend";

async function database() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("bazaga ulandi")
    } catch (error) {
        console.log(error);
    }
}

export default database;