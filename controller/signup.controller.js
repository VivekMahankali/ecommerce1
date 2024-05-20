const signModel=require('../model/users.model')
async function saveUser(req,res){
        try{
            
            const {email1,password1,username1,mobileNumber1}=req.body;
            const user1=await signModel.create({
                email:email1,
                password:password1,
                username:username1,
                mobileNumber:mobileNumber1
            });
            res.status(200).json(user1);
            // jwt.sign({email,password},"private key",(err,token)=>{
            //     res.status(200).json({token});
        }
        
        catch(error){
            res.status(400).json({"message":"invalid details"});
        }
        
}
async function getUser(req,res){
       const users=await signModel.find({})
       res.status(200).json(users);
}
module.exports={saveUser,getUser};
