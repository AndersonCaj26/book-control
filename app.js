const express = require('express');
const app = express();
const loginRouter= require('./routers/login');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();
require('./auth')(passport);


const authenticationMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.redirect('/');
}


//settings and middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}));
app.use(passport.initialize());
app.use(passport.session());


//routers
app.use('/', loginRouter);
app.get('/home', authenticationMiddleware, (req, res) => {
    res.render('home');
});


//activating server
app.listen(8081, () => {
    console.log(process.env.APP_URL);
});

