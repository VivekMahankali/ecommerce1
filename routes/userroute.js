const express=require('express');
const userModel=require('../model/usermodel')
const route=express.Router();
route.post('/',async(req,res)=>{
    // let user=new User({
        const {name1,email1,phone1,pincode,street,city,country}=req.body;
       try{
         const user=await userModel.create({
            name:name1,
            email:email1,
            phone:phone1,
            pincode,street,city,country
        
        });
        res.status(200).json(user);
    }
    catch(error){res.status(300).json({"message":"user not valid"})} 
});