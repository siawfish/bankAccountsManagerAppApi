const express = require('express')
const router = express.Router()
const { 
    fetchBanksController, 
    updateBanksController, 
    createBanksController, 
    deleteBanksController } = require('../controllers/bank')

router.get('/banks/:id?', fetchBanksController)
router.post('/create', createBanksController)
router.put('/edit', updateBanksController)
router.delete('/delete', deleteBanksController)

module.exports = router