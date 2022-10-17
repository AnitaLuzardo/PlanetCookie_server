const db = require('../../../database/models');

roles = async (req, res) => {
    try {
        const rols = await db.roles.findAll()
        res.status(200).json(rols)
    } catch (error) {
        console.log('ERROOOOOOOR:', e)
        res.sendStatus(500);
    }
};

module.exports = roles;