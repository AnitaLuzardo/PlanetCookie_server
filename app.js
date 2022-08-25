const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
	res.send('Probando servidor');
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}...`);
})
