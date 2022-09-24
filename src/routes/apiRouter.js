const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/auth', require('./auth'))
apiRouter.use('/backoffice', require('./backoffice'))

module.exports = apiRouter;