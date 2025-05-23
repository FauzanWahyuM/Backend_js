const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    quantity: Number,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Order', orderSchema);
