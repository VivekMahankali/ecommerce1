const productmod=require('../model/product.model');

async function postProduct(req,res){
    try{
    const {productId,imageUrl,productName,price,description,quantity}=req.body;
    const product=await productmod.create({
        productId,imageUrl,productName,price,description,quantity
    });
    res.status(200).json(product);
}
catch(error){
    res.status(400).json({"message":"product details invalid"});
}
}
async function getProductId(req,res){
    const {productId}=req.params;
    const products=await productmod.findById({})
}
async function getProduct(req,res){
    
    const products=await productmod.find({});
    res.status(200).json(products);
}
module.exports={postProduct,getProduct};
