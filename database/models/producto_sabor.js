module.exports = (sequelize, dataTypes) => {
	const alias = 'roductos_sabores';

	const cols = {
		id_producto: {
			type: dataTypes.INTEGER,
		},
		id_sabor: {
			type: dataTypes.INTEGER
		}
	}

	const config = {
		timeTamps: false
	};

	const ProductoSabores = sequelize.define(alias, cols, config);

	return ProductoSabores;
}