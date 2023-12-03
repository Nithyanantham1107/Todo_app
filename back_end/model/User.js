const mongoose=require("mongoose");
const userschema=mongoose.Schema(
    {
        name:{
            type:String,
            require:[true,"please enter name..."]
        },
        task1:{
            type:String,
            require:[true,"please enter Number..."]
        },
        task2:{
            type:String,
           
        }, 
        task3:{
            type:String,
           
        }
    },
    {
        timestamps:true
    }
)
const User=mongoose.model("User",userschema);
module.exports=User;