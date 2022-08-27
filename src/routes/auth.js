const express = require('express');
const authRouter = express.Router();
const controllers = require('../controllers/auth/registro')

//Register
authRouter.post('/register', controllers.register)

module.exports = authRouter;