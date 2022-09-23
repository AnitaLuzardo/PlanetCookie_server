const jwt = require('jsonwebtoken');

module.exports = (id) => {
  const expiration = process.env.JWT_TIEMPO_EXPIRA;

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: expiration
  });
};