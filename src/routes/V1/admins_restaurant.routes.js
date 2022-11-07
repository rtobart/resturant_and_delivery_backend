import express from 'express'
const router = express.Router()
import { createOne, read, deleteOne } from '../../controllers/admins_restaurant.controller.js'

router.post('/', createOne)
router.get('/', read)
router.delete('/', deleteOne)

export default router
