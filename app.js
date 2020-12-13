const express = require('express');
const app = express();

//settings

//routers
app.get('/', (req, res) => {
    res.status(400).send('Ok! It´s working!');
});

//activating server
app.listen(8081, () => {
    console.log('Server on URL http://localhost:8081 ');
});

