const db = require('../../../database/models');

allUsers = async (req, res) => {
  try {
    const usersDb = await db.usuarios.findAll({
      attributes: { exclude: ['pwd'] }
    })
    console.log('Lista de usuarios', usersDb)

    if(!usersDb) {
      return res.status(404).json({
        message: 'NO HAY USUARIOS REGISTRADOS'
      })
    }

    res.status(200).json(usersDb);

  } catch (error) {
    console.log('ERROOOOOOOR:', error)
      res.sendStatus(500);
  }
}

module.exports = allUsers;