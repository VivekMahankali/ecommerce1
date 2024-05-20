const mongoose=require('mongoose');
const userModel = require('./users.model');
const cartSchema=mongoose.Schema({
    cartItemId:{
        type:String,
        required:true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    productName:String,
    quantity:{
        type:Number,
        default:1,
    },
    price:String
});
const cartModel=mongoose.model("Cart",cartSchema);
module.exports=cartModel;