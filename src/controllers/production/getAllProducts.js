const db = require('../../../database/models')

module.exports = {
  allProducts: async (req, res) => {
    try {
      const productsDb = await db.productos.findAll()

      if(!productsDb) {
        return res.status(404).json({
          message: 'NO SE ENCONTRARON PRODUCTOS'
        })
      }
      res.status(200).json(productsDb);
    } catch (error) {
      console.log('ERROOOOOOOR:', error)
        res.sendStatus(500);
    }
  }
}