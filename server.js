// console.log("Hello world");

const express=require("express");
const mongoose=require("mongoose");
const routes=require("./router/route");

const app=express();
app.use(express.json());
app.use("/",routes);


//Db connection
mongoose
    .connect("mongodb+srv://nitindesai11122:Nitinmongodb@cluster0.4pvhf5e.mongodb.net/")
    .then(()=>{
        console.log("mongo DB Connected");
    })
    .catch((err)=>{
        console.log(err,"Something Went wrong");
    });
    
app.get("/test",(req,res)=>{
    res.send("hello beautiful lady,u r so pretty,This is Test Api");
});

app.listen(4000,()=>{
    console.log("Server is Connected");
});




