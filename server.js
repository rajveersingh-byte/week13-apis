const express = require('express');
require('dotenv').config();
const { products, category, brands } = require('./data');
const app = express();

app.use(express.json());


app.get('/category', (req, res) => {
    res.status(200).json({
        _success: true,
        _total: category.length,
        _data: category
    });
});


app.get('/brands', (req, res) => {
    res.status(200).json({
        _success: true,
        _total: brands.length,
        _data: brands
    });
});


app.get('/product', (req, res) => {
    res.status(200).json({
        _success: true,
        _total: products.length,
        _data: products
    });
});


app.get('/product/:id', (req, res) => {
    const id = req.params.id;

    const product = products.find(
        item => String(item.id) === id
    );

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    res.status(200).json({
        _success: true,
        _data: product
    });
});


app.get('/', (req, res) => {
    res.status(200).send(
        'API is running! Please visit /product, /category, or /brands.'
    );
});



let sycn = async () => {
    await app.listen(process.env.PORT, () => {
        console.log(`Server Start http://localhost:${process.env.PORT}`);
    })
}

sycn();