const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

const users = [{
    _id: 1,
    username: 'socorrocoelho',
    password: '$2a$10$XhQopfLBwXRzr7iz4YmMS.v.l6/3jfznawdlTX/8amGkN3lhf32HW'
}];

module.exports = function (passport) {
    function findUser(username) {
        return users.find(item => item.username === username);
    }

    function findUserById(id) {
        return users.find(item => item._id === id);
    }

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        try {
            const user = findUserById(id);
            done(null, user);
        } catch(err) {
            return done(err, null);
        }
    });

    passport.use(new localStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, 
    (username, password, done) => {
        try{
            const user = findUser(username);
            if (!user) return done(null, false);

            const isValid = bcrypt.compareSync(password, user.password);
            if(!isValid) return done(null, false);

            return done(null, user);

        }catch(err) {
           return done(err, false);
        }
    }));

};