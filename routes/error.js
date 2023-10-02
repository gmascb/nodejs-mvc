const express = require('express')
router = express.Router()

const homeController = require('../controllers/error')

router.get('/', homeController.get404)

module.exports = router;