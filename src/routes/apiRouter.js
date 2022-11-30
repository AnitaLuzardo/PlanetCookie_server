const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/auth', require('./auth'))
apiRouter.use('/products', require('./products'))
apiRouter.use('/backoffice', require('./backoffice'))

module.exports = apiRouter;