require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const create = require('./routes/create')
const read = require('./routes/read')
const update = require('./routes/update')
const del = require('./routes/delete')

const app = express()
const dbUrl = process.env.DATABASE_URL

app.use(express.json())
app.use('/create', create)
app.use('/read', read)
app.use('/update', update)
app.use('/delete', del)

async function connectToMongo() {
  await mongoose.connect(dbUrl)
}

app.listen(3000, connectToMongo)
