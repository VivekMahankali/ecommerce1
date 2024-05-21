const express = require('express');
const router = express.Router();
const Order = require('../models/order');
router.get('/user',enter)
router.post('/order/:userId',getUserProducts)
router.post('/order/cart',placeOrder)
module.exports = router;
