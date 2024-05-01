import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';

const app=express();
app.use(express.json());
app.use(cors());

const PORT=5000;

app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"Server is healthy"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})