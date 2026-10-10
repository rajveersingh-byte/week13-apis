const express = require('express');
require('dotenv').config();
const { products, category, brands } = require('./data');
const app = express();

app.use(express.json());


//Category API's
app.get('/category', (req, res) => {
    res.status(200).json({
        success: true,
        total: category.length,
        data: category
    });
});

//Brands API's
app.get('/brands', (res,res) =>{
     res.status(200).json({
        success: true,
        total: brands.length,
        data: brands
    });
})

//Products API's
app.get('/product', (req, res) => {
    res.status(200).json({
        success: true,
        total: products.length,
        data: products
    });
});

//Single Products API's
app.get('/product/:id', (req, res) => {
    let product = products.find(
        item => item.id === req.params.id
    );

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        data: product
    });
});



let sycn = async () =>{

    await app.listen(process.env.PORT, () =>{
        console.log(`Server Start http://localhost:${process.env.PORT}`);
    })
}

sycn();