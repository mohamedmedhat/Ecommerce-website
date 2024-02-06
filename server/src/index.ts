import express , { Request,Response } from "express";
import dotenv from 'dotenv';
import { sampleProducts } from "./data";
import mongoose from "mongoose";
dotenv.config()

/** constants */
const app = express()
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/shopo'
const PORT:number = parseInt((process.env.PORT) as string,10)

app.get('/api/products',(req:Request,res:Response)=>{
    res.json(sampleProducts);
})


/** middlewares  */



/* connect to Mongodb */

mongoose.set('strictQuery',true)
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Db is connecting :)")
})
.catch((e)=>{
    console.log(`error in db :( ${e}`);
})


/** Run the server */
app.listen(PORT || 5000, ()=>{
    console.log(`Server is running on port ${PORT} :)`);
})