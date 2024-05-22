require('dotenv').config()
const express=require('express');
const app=express();
app.use(express.json());
const userRoutes=require('./routes/signup.route');
const productRoutes=require('./routes/product.route');
const adminRoutes1=require('./routes/admin.route');

const port=process.env.PORT;
const mongoose=require('mongoose');
//mongoose.connect('mongodb+srv://ecommerce:jpmc123@test.sjcndqs.mongodb.net/')
mongoose.connect('mongodb://localhost:27017/Project')
.then(()=>console.log("connection successful"));
app.use('/signup',userRoutes);
app.use('/home',productRoutes);
app.use('/admin',adminRoutes1);

app.listen(port);
