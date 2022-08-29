const productoModel = require('./producto')

module.exports = (sequelize, dataTypes) => {
  const alias = 'imagenes';

  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    id_producto: {
      foreignKey: true,
			allowNull: false,
			type: dataTypes.INTEGER
    },
    nombre: {
      allowNull: false,
      type: dataTypes.STRING,
    }
  } 

  const config = {
    timestamps: false
  };

  const Imagen = sequelize.define(alias, cols, config);
  const Producto = productoModel(sequelize, dataTypes);

  Imagen.belongsTo(Producto, {
    foreignKey: 'id_producto',
    as: 'producto'
  });

  return Imagen; 
}