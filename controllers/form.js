const util = require('../util/database')
const Sequelize = require('sequelize')
const form = require('../models/form')

const jwt = require('jsonwebtoken')
const user = require('../models/signup')

exports.calculate = (req, res) => {

  const { name, email} = req.body.obj
  console.log(req.body) 
  const token = req.body.token
  console.log(token)
  const userId = Number(jwt.verify(token, "secretKeydfjdjjdskfjuehfuefuehuiwhcuipriya"))
  //console.log(userId)
   user.findAll({ where: { id: userId } }).then((result) => {
    console.log( result[0].dataValues)
    .then(() => { res.status(200).json({ "message": "data submitted" }) })
    .catch((err) => { res.status(404).json({ "message": "something went wrong" }) })
  })
}







