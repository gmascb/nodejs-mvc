const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();

const products = [];

router.get('/products', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', {
    title: 'Add Product'
  })
})

router.post('/add-product', (req, res, next) => {
  products.push({ 
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
   })
  console.log('Products: ', products)
  res.redirect('/products')
})

module.exports.router = router;
module.exports.products = products;