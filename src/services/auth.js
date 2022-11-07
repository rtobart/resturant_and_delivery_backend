import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithEmailAndPassword
  } from "firebase/auth"
import { config } from '../config/auth/firebase.js'

// const app = initializeApp(firebaseConfig);

const name = 'mymolchile'
const app = initializeApp(config.options, name)
const auth = getAuth(app)

const _signInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .catch(error => { throw error })
}
const client = {
  _signInWithEmailAndPassword
}
export { client }
