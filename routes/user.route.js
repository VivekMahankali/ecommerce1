const express=require('express');
const jwt=require('jsonwebtoken');
const signModel=require('../model/users.model');
const {saveUser,getUser}=require('../controller/signup.controller')

const route=express.Router();
route.use(express.json());
route.post('/',saveUser);
route.get('/',getUser);
module.exports=route;