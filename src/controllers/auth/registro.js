const db = require('../../../database/models');

module.exports = {
  register: async(req, res) => {
    const userNew = req.body
      
    try {
      await db.usuarios.create(userNew);
      console.log('Creando nuevo usuario', userNew)
      res.json(userNew)
    } catch (e) {
      console.log('ERROR:', e)
      res.sendStatus(500);
    }
  }
};