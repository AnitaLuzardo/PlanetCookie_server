const carritoModel = require('./carrito');

module.exports = (sequelize, dataTypes) => {
  const alias = 'compras_productos'

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    id_carrito: {
      foreignKey: true,
      allowNull: false,
      type: dataTypes.INTEGER
    },
    nombre_producto: {
      allowNull: false,
      type: dataTypes.STRING
    },
    total: {
      allowNull: false,
      type: dataTypes.DECIMAL,
    },
    cantidad: {
      allowNull: false,
      type: dataTypes.DECIMAL
    }
  }

  const config = {
    timestamps: false
  };

  const Compra_producto = sequelize.define(alias, cols, config);
  const Carrito = carritoModel(sequelize, dataTypes);

  Compra_producto.belongsTo(Carrito, {
    foreignKey: 'id_carrito',
    as: 'carrito'
  })

  return Compra_producto
}