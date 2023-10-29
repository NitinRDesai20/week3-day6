const express=require("express");
const router=express.Router()

const StudentController=require("../Controller/studentController");

router.post("/register",StudentController.createStudent);

module.exports=router;


