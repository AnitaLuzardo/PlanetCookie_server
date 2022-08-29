const rolModel = require('./rol')

module.exports= (sequelize, dataTypes) => {
    const alias= 'usuarios' 

    const cols= {
      id: {
        autoIcrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      id_rol: {
        foreignKey: true,
        allowNull: false,
        type: dataTypes.INTEGER
      },
      nombre: {
        allowNull: false,
        type: dataTypes.STRING
      },
      apellido: {
        allowNull: false,
        type: dataTypes.STRING
      },
      telefono: {
        allowNull: false,
        type: dataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: dataTypes.STRING
      },
      pwd: {
        allowNull: false,
        type: dataTypes.STRING
      }
    }

    const config = {
      timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config);
    const Rol = rolModel(sequelize, dataTypes);

    Usuario.belongsTo(Rol, {
      foreignKey: 'id_rol',
      as: 'rol'
    });

    return Usuario;
}