const express=require('express');
const {addToCart}=require('../controller/cart.controller')

const route=express.Router();
route.use(express.json());
route.post('/',addToCart);
module.exports=route;