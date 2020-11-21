const express = require('express');
const routes = require('./routes');
//const router = require('./routes')
require('./database')
const app = express()
const port = 3333
const host = '192.168.0.5'

app.use(express.json())
app.use(routes)

app.listen(port,host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})

/*
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/