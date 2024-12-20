const express = require('express');
const fileDemo = express.Router(); 

fileDemo.get('/file.json', (req, res) => { 
    res.status(200).json({
        file: 'Example',
        description: 'Demo Fabric connection'
    });
});

module.exports = fileDemo;