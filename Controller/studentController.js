const studentModels=require("../Models/studentModels");

let createStudent=async (req,res)=>{
    try{
        let data=req.body
        let register=await studentModels.create(data);
        return res.status(201).send({
            status:true,
            msg:"Students Registerd Successfully",
            data:register,
        });
    } catch (error) {
        return res
        .status(500)
        .send({status:false,msg:"Internal Server Error"});
    }
};

module.exports={createStudent}



