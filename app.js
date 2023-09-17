import express from "express";
//import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env"
})

// Using middleware
app.use(express.json());  // use to access json data in req.body 
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
})
)


//Using routes
app.use("/api/v1/users",userRouter); // means /users is already added
app.use("/api/v1/task",taskRouter); // means /users is already added


app.get("/",(req,res)=>{
    res.send("<h1>Nice Working<h1>")
})  


// Using error Middleware
app.use(errorMiddleware)
