const express = required("express");

const userRouter = express.Router();

const uploadUserImage = require("../middlewares/multer")

const {userModel} = require("../models/userModel");

userRouter.post("/signup",uploadUserImage.single("userImage")async(req,res)=>{
    try{
        const{name,email,password} = req.body;
        if(name!="" || email!="" || password!=""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user =await  userModel.findOne({email:email});
        if(user){
            return res.status(200).send({message:"User Already Exists"});
        }

        const newUser = await userModel.insertOne({name,email,password});

        return res.status.send({message:"User registered sucessfully"});
    }catch(error){
        res.status(500).send({message:"Something went wrong"})
    }
})


userModel.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(name!="" || email!="" || password!=""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user =await  userModel.findOne({email:email,password:password});
        if(user){
            return res.status(200).send({message:"User Already Exists"});
        }
        return res.status(200).send({message:"User logged in sucessfully"})
    }catch(error){
        return res.status(500).send({meassage:"Something Went Wrong"})
    }
})



module.exports = userRouter;