const util=require('../util/database')
const bcrypt=require('bcrypt')
const Sequelize=require('sequelize')
const path=require('path')
 const signup=require('../models/signup')
 
  exports.users=(req,res)=>{
    const{name,email,password,number}=req.body;
    const saltRounds=10
    bcrypt.genSalt(saltRounds,function(err,salt){
        bcrypt.hash(password,salt,function(err,hash){
        if(err)
        {
            console.log('unable to create the new user')
            res.json({"message":"User already exists. Try to log in"})
        }

    console.log(req.body)
    signup.create({name,email,password:hash,number}).then(()=>{res.json({"message":"Successfuly signed up"})}).catch(()=>{res.status(403).json({"message":"User already exists Please Login"})});
        
    })
})
  }

exports.signup=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','signup.html'))
}