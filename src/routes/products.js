const express = require('express');
const productRouter = express.Router();
const allProducts = require('../controllers/production/getAllProducts');

//Lista de productos
productRouter.get('/productList', allProducts)

module.exports = productRouter;