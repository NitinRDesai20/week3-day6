const courseModel=require("../Models/studentModels");

let createcourse=async (req,res)=>{
    try{
        let data=req.body
        let register=await courseModel.create(data);
        return res.status(201).send({
            status:true,
            msg:"Course Registerd Successfully",
            data:register,
        });
    } catch (error) {
        return res
        .status(500)
        .send({status:false,msg:"Internal Server Error"});
    }
};

module.exports={createcourse}





