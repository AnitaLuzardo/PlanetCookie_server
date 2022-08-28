const saborModel = require('./sabor');
const productoSaborModel = require('./producto_sabor');

module.exports = (sequelize, dataTypes) => {
	const alias = 'productos';

	const cols = {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		nombre: {
			allowNull: false,
			type: dataTypes.STRING
		},
		precio: {
			allowNull: false,
			type: dataTypes.DECIMAL
		},
		descrippcion: {
			allowNull: false,
			type: dataTypes.TEXT
		}
	}

	const config = {
		timestamps: false
	};

	const Producto = sequelize.define(alias, cols, config);
	const Sabor = saborModel(sequelize, dataTypes);
	const ProductoSabores = productoSaborModel(sequelize, dataTypes)

	Producto.belongsToMany(Sabor, {
		through: ProductoSabores,
		foreignKey: 'id_producto'
	})

	Sabor.belongsToMany(Producto, {
		through: ProductoSabores,
		foreignKey: 'id_sabor'
	});

	return Producto;
}