import express from 'express'
// import resetPasswordRouter from './password.js'
import login from './login.js'

const router = express.Router()

router.use(express.json())
router.use('/login', login)
// router.use('/password', resetPasswordRouter)

export default router