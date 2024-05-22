const cartModel=require('../model/cart.model')

async function addToCart(req,res){
    try{
    const{carItemId,quantity}=req.body
    const cartItem= await cartModel.create({

        _id:carItemId,
        userId:"1",
        productName:"xyz",
        price:"300",
        quantity:quantity
    })
    res.status(200).json(cartItem)
   }
   catch(error){
    res.status(400).json({message:"unable to add item to cart"})
   }
}
module.exports={addToCart}