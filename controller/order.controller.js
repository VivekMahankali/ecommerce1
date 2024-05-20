const orderModel=require('../model/order.model')
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
async function saveProducts(req,res){
    try{
        const { userId, ...rem }=req.body;
        const user=await User.findById(userId);
        if(!user)
          return res.status(404).json({ message:'User not found'});
        for (let item of products) {
          const product=await Product.findById(item.productId);
          if (!product)
            return res.status(404).json({ message:`Product with ID ${item.productId} not found`});
        }
        const order=new Order({
          userId,
          //products
        });
        await order.save();
        res.status(201).json(order);
      }catch(error) {
        console.error(error);
        res.status(500).json({message:'Internal server error'});
      }
}