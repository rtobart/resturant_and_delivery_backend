import express from 'express'
const router = express.Router()
import roles from './roles.routes.js'
import tarifas from './tarifas.routes.js'
import restaurantes from './restaurantes.routes.js'
import usuarios from './usuarios.routes.js'
import productos from './productos.routes.js'
import direcciones from './direcciones.routes.js'
import admins_restaurant from './admins_restaurant.routes.js'

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.use('/roles', roles)
router.use('/tarifas', tarifas)
router.use('/restaurantes', restaurantes)
router.use('/usuarios', usuarios)
router.use('/productos', productos)
router.use('/direcciones', direcciones)
router.use('/admins_restaurant', admins_restaurant)

export default router
