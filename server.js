const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('dist')) // This tells the app what to load once it is accessed by user

app.listen(process.env.PORT || 3000, function () {console.log(`Example app listening on port ${port}`)})