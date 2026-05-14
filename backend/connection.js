import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export default async function Connection() {
    try {
        await mongoose.connect(process.env.MONGO_URL_LOCAL);
        console.log("mongodb connected successfully")
    }
    catch(err) {
        console.log("Error connecting to database "+err)
    }
}