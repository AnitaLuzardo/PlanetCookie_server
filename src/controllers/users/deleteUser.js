const db = require('../../../database/models');
const user = db.usuarios;

deleteUser = async (req, res) => {
  const id = req.body.id
  try {
    // console.log('Prueba', id)
    await user.destroy(
      {
        where: { id }
      }
    )
  } catch (error) { 
    return res.status(500).json({msg: error})
  }
  res.status(200).json({
    msg: `User ${id} deleted Sucessfully`
  });
}

module.exports = deleteUser;