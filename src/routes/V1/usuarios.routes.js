import express from 'express'
const router = express.Router()
import { createOne, read, updateOne, changeState } from '../../controllers/usuarios.controller.js'

router.post('/', createOne)
router.get('/', read)
router.put('/', updateOne)
router.put('/estado', changeState)



export default router
