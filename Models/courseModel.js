const mongoose=require("mongoose");

let courseSchema=new mongoose.Schema({
    Course_Name:{
        type:String,
        required:true,
        unique:true,
    },
    Subject_code:{
        type:String,
        required:true,
        unique:true,
    },
    Subject_name:{
        type:String,
        required:true,
        unique:true,
    },
    Course_duration:{
        type:Number,
        required:true,
    },
    Author_name:{
        type:Number,
        required:true,
        unique:true,
    },

},{timestamps:true});


module.exports=new mongoose.model("course",courseSchema);
