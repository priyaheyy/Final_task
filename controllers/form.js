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







  // const{amount,description,category}=req.body;
  // //console.log(req)
  // console.log(req.body.id)
  // console.log(req.body.amount)
  // console.log(req.body.description)
  // console.log(req.body.category)

  // formTable.create({amount,description,category}).then(()=>{
  //   res.json({"message":"Your records are Submitted"})
  // }).catch((err) => res.json({"message":"Something went wrong"}))

//}
