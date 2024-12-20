const express = require('express');
const app = express(); 
const home = require('../router/home.js');
const file = require('../router/file.js');
const port = 3000; 

app.set('port', port);

app.use(home);
app.use(file);

app.use('*', (req, res) => { 
    res.status(404).send('Error 404');
});

app.listen(port, () => {
    console.log(`Listening port http://localhost:${port}`);
});