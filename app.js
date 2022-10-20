const express = require('express')
const app = express()

// IMPORT
require ('dotenv').config()


// GET ROUTE
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen( process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})