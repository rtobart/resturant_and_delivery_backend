import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)
app.get('/', (req, res) => { res.status(200).send('runing') })

export default app