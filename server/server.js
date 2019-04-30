const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()
const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/houses',ctrl.getAllHouses)

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db)
    app.listen(SERVER_PORT, () =>(
        console.log(`listening on port ${SERVER_PORT}`)
    ))
})

