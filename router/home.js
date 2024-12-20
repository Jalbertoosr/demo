const express = require('express');
const home = express.Router(); 

home.get('/', (req, res) => { 
    res.status(200).json({
        msg: 'Welcome User!' 
    });
});

module.exports = home;