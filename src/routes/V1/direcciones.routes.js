import express from 'express'
const router = express.Router()
import { createOne, read, updateOne, deleteOne } from '../../controllers/direcciones.controller.js'

router.post('/', createOne)
router.get('/', read)
router.put('/', updateOne)
router.delete('/', deleteOne)


export default router
