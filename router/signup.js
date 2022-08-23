const express=require('express')
const router=express.Router()
const path=require('path')
const controller=require('../controllers/signup')

router.use('/signedUp',controller.signedUp)
router.use('/',controller.signup)

module.exports=router