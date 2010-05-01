const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//routers
app.get('/', (req, res) => {
    res.status(400).render('login');
});

//activating server
app.listen(8081, () => {
    console.log('Server on URL http://localhost:8081 ');
});

