// IMPORTANDO E INSTANCIANDO (EXPRESS, ROTAS E DOTENV)
const express = require('express')
const app = express()
const router = require('./routes')
require ('dotenv').config()

// MIDDLEWARES (PARA CADA REQ, EXECUTA URLENCODED, JSON E ROUTER)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

// PORTA ONDE ESTA SENDO EXECUTADA
app.listen( process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

// EXPORTANDO FORA DO ARQUIVO A FUNÇÃO APP (EXPRESS)
module.exports = app