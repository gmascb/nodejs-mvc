const Product = require('../models/product')

module.exports.getAddProductPage = (req, res, next) => {
  res.render('add-product', {
    title: 'Add Product',
    path: '/products'
  })
}

exports.postAddNewProduct = (req, res, next) => {
  new Product(req.body.title, req.body.description, req.body.price).saveInMemory()
  res.redirect('/products')
}

exports.getProducts = (req, res, next) => {
  res.render('shop', { 
    products: Product.fetchAllInMemory(),
    title: 'Shop',
    path: '/shop'
   })
}