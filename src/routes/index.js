import express from 'express'
const router = express.Router()
import { isAuthenticated } from '../middleware/authentication.js'

import ping from './ping.routes.js'
import auth from './auth/index.js'
import V1 from './V1/index.js'

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.use('/ping', ping)
router.use('/auth', auth)
// router.use('/V1', isAuthenticated, V1)
router.use('/V1', V1)


export default router
