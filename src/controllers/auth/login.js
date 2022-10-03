const bcryptjs = require('bcryptjs');
const db = require('../../../database/models'); 
const generateToken = require('../../functions/generateToken');

module.exports = {
  login: async (req, res) => {
    const { email, pwd } = req.body;

    try {
      const user = await db.usuarios.findOne({
        where: {
          email
        }
      });

      if(!user) {
        return res.status(400).json({
          ok: false,
          message: 'Los datos no coinciden'
        })
      }

      const pwdEquals = bcryptjs.compareSync(pwd, user.pwd);
      if(!pwdEquals) {
        return res.status(401).json({
          ok: false,
          message: 'Datos incorrectos'
        }); 
      }

      const userLogged = {
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        telefono: user.telefono,
        roleId: user.id_rol,
        token: generateToken(user.id)
      };

      res.status(200).json(userLogged);
    } catch (e) {
      console.log('ERROOOOOOOR:', e)
        res.sendStatus(500);
    }
  }
}