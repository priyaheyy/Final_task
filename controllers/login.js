const jwt = require('jsonwebtoken');
const usercred = require('../util/database')
const Sequelize = require('sequelize')
const path = require('path')
const table = require('../models/signup')
const bcrypt = require('bcrypt')
const exp = require('constants')

exports.login = (req, res) => {
        const email = req.body.email //coming from front end (login page)
        const password = req.body.password //coming from front end (login page)without hash  
        table.findAll({ where: { email } }).then((result) => {
               
                // console.log(result) //it returns an array
                if (result.length == 0) {
                        res.status(403).json({ "message": "User does not exist, Please Sign Up..." })
                } else {
                        // console.log(result[0].dataValues.email + result[0].dataValues.password) //in hashed form 
                        bcrypt.compare(password, result[0].dataValues.password, function (error, response) {
                                if (error) {
                                        res.status(404).json({ "message": "Something went wrong" })
                                } else {
                                        if (response) {
                                                var token="";
                                                const createToken=async()=> {
                                                        //along with response sending the message along with the jwt token in front end
                                                        token = await jwt.sign(result[0].dataValues.id, "secretKeydfjdjjdskfjuehfuefuehuiwhcuipriya")                
                                                        res.status(201).json({ "message": "Successfully logged in !!","token":`${token}`})    
                                                }
                                                        
                                                    createToken();
                                                

                                        } else {
                                                res.status(401).json({ "message": "incorrect password" })
                                        }
                                }
                        })

                }

        })
       
}

exports.login = (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
}

exports.form=(req,res)=>{
        res.sendFile(path.join(__dirname, '../', 'views', 'form.html'))
}

