const express=require("express");
const app=express();
const cors=require("cors");

app.use(express.json());




app.use(cors());
const mongoose=require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB).then(
    ()=>{
        console.log("connected Successfully!!");
    }
).catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log("hi im done")
})
app.use("/user", require("./router/Userrouter"));