const jwt = require('jsonwebtoken');
const express = require('express')
const path=require('path')
const app = express()
const db = require('./util/database')
const login = require('./router/login')
const signuptable=require('./models/signup')
const formtable=require('./models/form')

app.use(signuptable)
app.use(formtable)

const signup = require('./router/signup')
const bp = require('body-parser')
app.use(bp.json())

app.use(login)



app.use(signup)
db.sync().then((result) => { app.listen(4000) }).catch((err) => { console.log(err) })
