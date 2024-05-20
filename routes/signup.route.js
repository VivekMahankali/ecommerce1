const express=require('express');
const jwt=require('jsonwebtoken');
const signModel=require('../model/signup.model');
const {saveUser,getUser}=require('../controller/signup.controller')


const productModel=require('../model/product.model');
const cartModel=require('../model/cart.model');
const orderModel=require('../model/order.model');
const route=express.Router();
route.use(express.json());
route.post('/',saveUser);
route.get('/',getUser);

module.exports=route;