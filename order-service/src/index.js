require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5003;

connectDB();

app.use(express.json());
app.use('/orders', orderRoutes);

app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
