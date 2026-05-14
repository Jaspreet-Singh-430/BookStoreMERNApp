import express from 'express'
import dotenv from "dotenv"
import Connection from "./connection.js"
import BookRoutes from "./Routes/bookRoutes.js"
import UserRoutes from "./Routes/userRoutes.js"
import cors from "cors"
dotenv.config()
const app=express()
const port=process.env.PORT
const domain=process.env.DOMAIN
app.use(cors({
    origin:`${domain}`
}))
app.use(express.json({extended:false}))
app.use("/book",BookRoutes)
app.use("/user",UserRoutes)
Connection();
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.listen(port,()=>{
    console.log("Server is listening at port "+port);
})