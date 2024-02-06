import express , { Request,Response } from "express";
import dotenv from 'dotenv';
import { sampleProducts } from "./data";
dotenv.config()

/** constants */
const app = express()
const PORT = process.env.PORT

app.get('/api/products',(req:Request,res:Response)=>{
    res.json(sampleProducts);
})
/** middlewares  */




app.listen(PORT || 5000, ()=>{
    console.log(`Server is running on port ${PORT} :)`);
})