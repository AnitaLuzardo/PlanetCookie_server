module.exports = (sequelize, dataTypes) => {
	const alias = 'roles';

		const cols = {
			id: {
				autoIncrement: true,
				primaryKey: true,
				type: dataTypes.INTEGER
			},
			nombre:{
				allowNull: false,
				type: dataTypes.STRING,
			}
		}

		const config = {
			timestamps: false
		};

		const Rol = sequelize.define(alias, cols, config)

		return Rol;
}