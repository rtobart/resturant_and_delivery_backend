import express from 'express'
const router = express.Router()
import { createOne, read, updateOne, changeState, deleteOne } from '../../controllers/productos.controller.js'

router.post('/', createOne)
router.get('/', read)
router.put('/', updateOne)
router.put('/estado', changeState)
router.delete('/', deleteOne)

export default router
