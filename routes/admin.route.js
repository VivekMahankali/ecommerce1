const express=require('express');
const productmodel=require('../model/product.model');
const ordermodel=require('../model/order.model');
const router=express.Router();

router.use(express.json());

const {getProduct,productEditData,productDelete,productEditSave,postProduct}=require('../controller/product.controller');

router.get('/',getProduct);
router.get('/productEdit/:id',productEditData);
router.delete('/delete/:id',productDelete);
router.post('/addProduct',postProduct);
router.patch('/admin/productEdit/:id',productEditSave);

module.exports=router;