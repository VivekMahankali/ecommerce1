const express=require('express');
const route=express.Router();
route.use(express.json());
const {postProduct,getProduct}=require('../controller/product.controller')
route.post('/',postProduct);
route.post('/',getProduct);
route.get('/',getProduct);
module.exports=route;