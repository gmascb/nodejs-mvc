const express = require('express')
const router = express.Router();
const productsController = require('../controllers/products')

router.get('/products', productsController.getAddProductPage)

router.post('/add-product', productsController.postAddNewProduct)

module.exports = router;