import { EmptyResultError } from 'sequelize'
import { BadRequest, Unauthorized } from '../util/errors.js'
import { auth } from '../services/auth-admin.js'
// import { Rol, Usuario } from '../models.js'

const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) return res.status(400).json({ message: 'No token provided' })

  const token = authorization.split('Bearer ')[1]
  if (!token) return res.status(400).json({ message: 'missing bearer scheme' })

  return auth.verifyIdToken(token)
    .then(decodedToken => {
        req.user = decodedToken
        return next()
    })
    .catch(error => {
        res.status(401).send({code: error.code, message: 'Unauthorized'})
    })
    // .then(async claims => {
    //   res.locals.claims = claims
    //   return Usuario.func.findBy({ email: claims.email }, { rejectOnEmpty: true })
    //     .then(async user => {
    //       // TODO: check what it is more convenient, current uer within outside locals.current
    //       res.locals.currentUser = user
    //       res.locals.current = await getCurrents(user)
    //       return next()
    //     })
    //     .catch(error => {
    //       if (error instanceof EmptyResultError) {
    //         if (claims.admin) return next()
    //         return next(new Unauthorized('authenticator: user not found'))
    //       }
    //       return next(error)
    //     })
    // })
    // .catch(error => {
    //     return next(error)
    // })
}

const _isAuthenticated = isAuthenticated
export { _isAuthenticated as isAuthenticated }
