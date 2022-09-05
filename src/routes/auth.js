const express = require('express');
const authRouter = express.Router();
const controllers = require('../controllers/auth/registro');
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
    .isLength({min: 8}).withMessage('La contraseña debe tener mínimo 8 caracteres'),
  check('confirmarPassword')
    .notEmpty().withMessage('Debe confirmar la contraseña')
    .custom((value, {req}) => (value === req.body.pwd)).withMessage('Las contraseñas no coinciden'),
  validateFields
], controllers.register)

module.exports = authRouter;