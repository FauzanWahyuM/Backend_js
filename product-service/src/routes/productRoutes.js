const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
    const { name, price, stock } = req.body;
    const product = new Product({ name, price, stock });
    await product.save();
    res.status(201).json(product);
});

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
