const express = require('express')
router = express.Router()

const homeController = require('../controllers/home')

router.get('/home', homeController.getHome)

module.exports = router;