const express = require('express');
const authRouter = express.Router();
const regisController = require('../controllers/auth/registro');
const loginController = require('../controllers/auth/login');
const rolesUser = require('../controllers/auth/roles')
const { validateFields } = require('../middleware/validateFields');
const {check} =  require('express-validator');

//Register
authRouter.post('/register', [
  check('nombre')
    .notEmpty().withMessage('Por favor ingrese su nombre')
    .isLength({min: 2}).withMessage('El nombre debe tener mínimo 2 caracteres'),
  check('apellido')
    .notEmpty().withMessage('Por favor ingrese su apellido')
    .isLength({min: 2}).withMessage('El apellido debe tener mínimo 2 caracteres'),
  check('telefono')
    .notEmpty().withMessage('el telefono es requerido')
    .isNumeric().withMessage('Solo se aceptan números'),
  check('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email no tiene un formato válido'),
  check('pwd')
    .notEmpty().withMessage('La contraseña es requerida')
    .isLength({min: 6}).withMessage('La contraseña debe tener mínimo 6 caracteres'),
  check('confirmarPassword')
    .notEmpty().withMessage('Debe confirmar la contraseña')
    .custom((value, {req}) => (value === req.body.pwd)).withMessage('Las contraseñas no coinciden'),
  validateFields
], regisController.register);

//Roles
authRouter.get('/roles', rolesUser);

//Login
authRouter.post('/login', [
  check('email')
    .not().isEmpty().withMessage('Por favor ingrese un email')
    .isEmail().withMessage('Por favor ingrese un email válido'),
  check('pwd')
    .notEmpty().withMessage('La contraseña es requerida'),
    validateFields
], loginController.login);

module.exports = authRouter;