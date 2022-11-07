import express from 'express'
import { client } from '../../services/auth.js'

const router = express.Router()

const logIn = (req, res, next) => {
  const { email, password } = req.body
  return client._signInWithEmailAndPassword(email, password)
    .then(({ _tokenResponse: { idToken, refreshToken, expiresIn } }) => {
      console.log(email + ' signed in')
      return res.status(200).json({ idToken, refreshToken, expiresIn })
    })
    .catch(error => {
        res.status(400).json({ msj: error.message })
    })
}

router.post('/', logIn)

export default router