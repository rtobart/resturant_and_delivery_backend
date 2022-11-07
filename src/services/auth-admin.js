// import { credential } from 'firebase-admin';
import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth'
import { config } from '../config/auth/firebase-admin.js'

const app = admin.initializeApp({
  credential: admin.credential.cert(config.options)
})

const auth = getAuth(app)

const createUser = (properties, options = {}) => {
  return auth.createUser(properties)
    .then(userRecord => {
      const { uid, email } = userRecord
      if (options.verbose) console.info('User', email, 'created with uid', uid)
      return userRecord
    })
    .catch(async error => {
      switch (error.code) {
        case 'auth/email-already-exists':
          if (options.ignoreExisting) {
            const { email } = properties
            if (options.verbose) console.info('User', email, 'already exists')
            return
          }
          if (options.updateExisting) {
            const user = await auth.getUserByEmail(properties.email)
            const { email } = properties
            if (options.verbose) console.info('User', email, 'already exists, updating')
            return auth.updateUser(user.uid, properties)
          }
          throw error
        default:
          throw error
      }
    })
}
// const createUser2 = async (properties, options = {}) => {
//   try {
//     const userRecord = await auth.createUser(properties);
//     const { uid, email } = userRecord;
//     if (options.verbose)
//       console.info('User', email, 'created with uid', uid);
//     return userRecord;
//   } catch (error) {
//     switch (error.code) {
//       case 'auth/email-already-exists':
//         if (options.ignoreExisting) {
//           const { email: email_1 } = properties_3;
//           if (options.verbose)
//             console.info('User', email_1, 'already exists');
//           return;
//         }
//         if (options.updateExisting) {
//           const user = await auth.getUserByEmail(properties_3.email);
//           const { email: email_3 } = properties_3;
//           if (options.verbose)
//             console.info('User', email_3, 'already exists, updating');
//           return auth.updateUser(user.uid, properties_3);
//         }
//         throw error;
//       default:
//         throw error;
//     }
//   }
// }
export {
  auth,
  createUser
}
