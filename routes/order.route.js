const express = require('express');
const router = express.Router();
const Order = require('../model/order.model');
router.get('/user',enter)
router.post('/order/:userId',getUserProducts)
router.post('/order/cart',placeOrder)
module.exports = router;