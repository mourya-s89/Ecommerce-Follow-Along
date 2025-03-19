const express = require('express');

const productRouter = express.Router();

const productModel = require('../models/productModel');

const productImages = require("../middlewares/multer");

productRouter.post("/addProduct", async (req, res,next) => {
    productImages.array("images",6)(req,res,async (err)=>{
        if(err){
            return res.status(500).send({message:"Something went wrong",error});
        }
    })
    
},async (req, res) => {
    try {
        const { title, description, price} = req.body;
        if (!title || !description || !price ) {
            return res.status(404).send({ message: "please add all fields"});
        }

        const images = req.files;
        
    } catch (error) {
        return res.status(500).send({message:"Something went wrong",error});
    }
       
})