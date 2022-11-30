const express = require('express');
const productRouter = express.Router();
const productsControllers = require('../controllers/production/getAllProducts');

//Lista de productos
productRouter.get('/catalog', productsControllers.allProducts)

module.exports = productRouter;