const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const order = new Order({ userId, productId, quantity });
    await order.save();
    res.status(201).json(order);
});

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

module.exports = router;
