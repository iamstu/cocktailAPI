require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json());

const router = require('./src/routes')
const port = process.env.PORT || 3000

app.use(router)
app.get('/', (req, res) => {
  res.send('hey i think it\'s working')
})

app.listen(port, () => {
  console.log(`App listening on ${port}`)
})