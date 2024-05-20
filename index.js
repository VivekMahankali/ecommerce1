require('dotenv').config()
const express=require('express');
const app=express();
app.use(express.json());
const userRoutes=require('./routes/user.route');
const port=process.env.PORT;
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project')
.then(()=>console.log("connection successful"));
app.use('/api/user',userRoutes);
app.listen(port);