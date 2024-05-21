require('dotenv').config()
const express=require('express');
const app=express();
app.use(express.json());
const userRoutes=require('./routes/signup.route');
const cartRoutes=require('./routes/product.route');

const port=process.env.PORT;
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project')
.then(()=>console.log("connection successful"));
app.use('/signup',userRoutes);
app.use('/home',cartRoutes);
app.listen(port);
// {
//     "productId":"1",
//     "imageUrl":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdress%2F&psig=AOvVaw197C438_sxLod0aZSx9CrA&ust=1716291269495000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMi2kJyRnIYDFQAAAAAdAAAAABAE",
//     "productName":"dress",
//     "price":"100",
//     "description":"short",
//     "quantity":"2"

// }