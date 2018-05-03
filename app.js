import express from 'express'
import bodyParser from 'body-parser'
import travelfy from './srv/travelfy.service.js'
import dotenv from 'dotenv'
dotenv.config()

// const router = express.Router()

// TODO sometginf
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.use('/', router)
app.get('/', (req, res) => {
  res.send('Launched!')
})

app.get('/email', (req, res) => {
  travelfy.checkMail()
  res.send()
})

app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})

// module.exports = router
