const path = require('path')
const express = require('express')

const adminData = require('./admin')

const router = express.Router();

router.get('/shop', (req, res, next) => {
  console.log('Shop:', adminData.products)
  
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
  res.render('shop', { 
    products: adminData.products,
    title: 'Shop',
    path: '/shop'
   })
})

module.exports = router;