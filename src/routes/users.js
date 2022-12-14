const express = require('express');
const userRouter = express.Router();
const allUsers = require('../controllers/users/getAllUsers')

//Lista de usuarios
userRouter.get('/userList', allUsers)

module.exports = userRouter;
