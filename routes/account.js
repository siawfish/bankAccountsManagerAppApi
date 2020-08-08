const express = require('express')
const router = express.Router()
const { createAccountsController, fetchAccountsController } = require('../controllers/account')

router.get('/accounts', fetchAccountsController)
router.post('/accounts', createAccountsController)

module.exports = router