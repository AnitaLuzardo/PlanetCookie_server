const bcrypt = require('bcryptjs');
const db = require('../../../database/models');

module.exports = {
  register: async(req, res) => {
    const userNew = req.body
      
    try {
      const userInDb = await db.usuarios.findOne({ 
        where: {
          email: userNew.email
        } })

      if(userInDb) {
        return res.status(409).json({ message: 'El email ya esta registrado' });
      };

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