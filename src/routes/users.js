const express = require('express');
const userRouter = express.Router();
const allUsers = require('../controllers/users/getAllUsers')
const deleteUser = require('../controllers/users/deleteUser')

//Lista de usuarios
userRouter.get('/userList', allUsers);
userRouter.delete('/delete', deleteUser)

module.exports = userRouter;
