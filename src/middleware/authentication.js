const jwt = require('jsonwebtoken');
const db = require("../../database/models");
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  // const token = authHeader || (variable = valor);
  // const token = authHeader || otra;
  if (authHeader) {
    //authHeader = 'Bearer token'
    //el split(' ') => ['Bearer', 'token-hash']
    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401); // unauthorized error
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log('jwt err ==>', err);
        return res.sendStatus(401);
      }
      req.user = user;
      next();
   });
  } else {
    res.sendStatus(401);
  }
}

module.exports = verifyToken