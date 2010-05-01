const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    if (req.query.fail){
        req.session.cookie.maxAge = 0;
        res.render('login', {message: 'Autenticacão Incorreta!'});
    }else{
        req.session.cookie.maxAge = 0;
        res.render('login', {message: null});

    }
});

router.post('/', passport.authenticate('local',{
    successRedirect: '/home',
    failureRedirect: '/?fail=true'
}));

module.exports = router;