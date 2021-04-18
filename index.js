import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import router from './router.js'

const PORT = 5000

// Your connection url from mongo
const CONNECTION_URL = ''

const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const startApp = () => {
  try {
    app.listen(PORT, async () => {
      await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('SERVER STARTED')
    })
  } catch (error) {
    console.log('SERVER_ERROR: ', error)
  }
}

startApp()