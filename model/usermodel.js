const mongoose=require('mongoose');
const user_schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    }
});
user_schema.virtual('id').get(function(){
    return this._id.toHexString();
});
user_schema.set('toJSON', {
    virtuals: true,
});
const userModel=mongoose.model("User",user_schema);
module.exports=userModel;