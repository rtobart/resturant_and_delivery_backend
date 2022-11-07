import express from 'express'
const router = express.Router()
import { createOne, read, updateOne, changeState } from '../../controllers/restaurantes.controller.js'

router.post('/', createOne)
router.get('/', read)
router.put('/', updateOne)
router.put('/estado', changeState)

router.get('/:id/productos', (req, res) => {
    // funtion to get all products from a restaurant id with sequelize
    
})

export default router
