import express from "express";
import "dotenv/config"

const app = express()

const PORT = 8600
app.listen(process.env.PORT,()=>{
    console.log(`server listion on port number ${PORT}`);
})