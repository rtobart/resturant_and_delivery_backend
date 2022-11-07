// const express = require('express')
// const { body, matchedData } = require('express-validator')
// const { rejectOnValidationErrors } = require('../../middlewares/helpers.middleware')
// const { sendCustomPasswordResetEmail } = require('../../services/mailer')
// const { auth } = require('../../services/auth-admin')

// const validations = [
//   body('email')
//     .exists().withMessage('must provide an email').bail()
//     .isEmail(),
//   body('url')
//     .exists().withMessage('must provide a callback url').bail()
//     .isURL({ require_tld: false }),
//   body('locale')
//     .exists().withMessage('must provide a locale').bail()
//     .isLocale()
// ]

// const router = express.Router()

// const resetPassword = (req, res, next) => {
//   const { email, locale, url } = matchedData(req, { locations: ['body'] })
//   return auth.generatePasswordResetLink(email, { url })
//     .then(link => sendCustomPasswordResetEmail(email, link, locale)
//       .then(result => res.status(200).json(result))
//       .catch(next)
//     )
//     .catch(next)
// }

// router.post('/', [...validations, rejectOnValidationErrors, resetPassword])

// export default router