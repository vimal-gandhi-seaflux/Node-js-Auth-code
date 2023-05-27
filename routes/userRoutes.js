const express = require('express')
const UserRouter = express.Router()
const {signup , signin} = require('./../controllers/userController.js')

UserRouter.post("/signup" , signup);

UserRouter.post("/signin" , signin);


module.exports = UserRouter