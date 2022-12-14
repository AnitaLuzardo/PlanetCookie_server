module.exports = (sequelize, dataTypes) => {
    const alias = 'sabores';

    const cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      nombre: {
        allowNull: false,
        type: dataTypes.STRING
      }
    }
    
    const config = {
      timestamps: false
    };

    const Sabor = sequelize.define(alias, cols, config)
    
    return Sabor;
}