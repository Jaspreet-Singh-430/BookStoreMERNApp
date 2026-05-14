import express from "express"
import {getBook} from "../Controllers/bookController.js"
const BookRoutes=express.Router()
BookRoutes.get("/",getBook)
export default BookRoutes