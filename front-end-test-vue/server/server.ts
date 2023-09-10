import express from 'express'
import bodyParser from 'body-parser'
import pino from 'pino'
import expressPinoLogger from 'express-pino-logger'
import { Collection, Db, MongoClient, ObjectId } from 'mongodb'

// set up Mongo
// Connection URL
const username = encodeURIComponent('annabelle');
const password = encodeURIComponent('lwy9Ao3mpoDAVEeN');
const url = `mongodb+srv://${username}:${password}@hackduke.hasnibk.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

// set up Express
const app = express()
const port = 8093
app.use(bodyParser.json())

// set up Pino logging
const logger = pino({
  transport: {
    target: 'pino-pretty'
  }
})
app.use(expressPinoLogger({ logger }))

let db: Db
let box_status: Collection

// app routes
app.get("/api/box_status", async (req, res) => {
  res.status(200).json(await box_status.find().toArray())
})

app.get("/api/box_status/:patient", async (req, res) => {
  const data = await box_status.find({ name: req.params.patient }).toArray()
  res.status(200).json(data)
})

// connect to Mongo
client.connect().then(() => {
  console.log('Connected successfully to MongoDB')
  db = client.db("pillbox")
  box_status = db.collection('box_status')

  // start server
  app.listen(port, () => {
    console.log(`Data server listening on port ${port}`)
  })
})
