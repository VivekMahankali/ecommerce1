const orderModel=require('../model/order.model')
const productModel=require('../models/product.model')
const cartModel=require('../models/cart.model')
async function enter(req,res){
    try{
    const {userId,orderId,productName,quantity,totalPrice,status,price}=req.body
    const order=orderModel.create({
        userId,orderId,productName,quantity,totalPrice,status,price
    })
    res.status(200).json(order)
    }
    catch(err){
        res.status(404).json({"message":"Invalid Order"})
    }
}
async function getUserProducts(req,res){
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ userId }).exec();
        res.json(orders);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
async function placeOrder(req,res){
    try{
      const { userId, cartItems } = req.body;
      let total = 0;
      for (const item of cartItems) {
        if(item.quantity<Product.quantity)
          totalPrice += item.price * item.quantity;
        else{
          res.status(404).json({message:"Out Of Stock"})
        }
      }
      for (const item of cartItems) {
        await productModel.updateOne(
            { productName: item.productNmae},
            { $inc: { quantity: -item.quantity } }
        );
    }
      
      const order = new Order({
          userId,
          items: cartItems,
          totalPrice,
          status: 'Processing'
      });
      await order.save();
      }catch(error) {
        console.error(error);
        res.status(500).json({message:'Internal server error'});
      }

    }

