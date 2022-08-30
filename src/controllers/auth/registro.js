const bcrypt = require('bcryptjs');
const db = require('../../../database/models');

module.exports = {
  register: async(req, res) => {
    const userNew = req.body
      
    try {
      const salt = bcrypt.genSaltSync(10);
      userNew.pwd = bcrypt.hashSync(req.body.pwd.trim(), salt);

      await db.usuarios.create(userNew);
      console.log('Creando nuevo usuario', userNew)
      res.json(userNew)
    } catch (e) {
      console.log('ERROR:', e)
      res.sendStatus(500);
    }
  }
};