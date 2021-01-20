import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
const PORT = process.env.PORT || 5000

dotenv.config();
const app = express();

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.send(product);
})

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode, on port ${PORT}`))