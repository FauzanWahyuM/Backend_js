require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

connectDB();

app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
