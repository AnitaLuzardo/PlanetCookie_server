const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config({path:'./.env'});

app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended:true }));

const routes = require ('./src/routes/apiRouter');

app.use('/api', routes);

const port = process.env.PORT || 3500;
app.listen(port, () => {
	console.log(`Api RESTFul ejecutandose ${port}...`);
})
