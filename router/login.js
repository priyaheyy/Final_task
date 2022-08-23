const express=require('express')
const router=express.Router()


const controllerLogin=require('../controllers/login')
const controllerform=require('../controllers/form')

router.use('/login',controllerLogin.login)
router.use('/loggedIn',controllerLogin.loggedIn)
router.use('/form',controllerLogin.form)
router.use('/calculate',controllerform.calculate)


module.exports=router