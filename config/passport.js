var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');

module.exports = function(passport, config) {
    console.log('passport config...');
    //serialize sessions
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      User.findOne({ _id: id }, function (err, user) {
        done(err, user)
      })
    });
     
    passport.use(new LocalStrategy({
    	usernameField: 'username',
    	passwordField: 'password'
        },
        function(username, password, doen) {
        	User.findOne({username: username}, function(err, user) {
        	    if(err) return done(err);
        	    if(!user) {
        	        return done(null, false, {message: '没有此用户'});
        	    }
        	    if(!user.validPassword(password)) {
        	    	return done(null, false, {message: '密码错误'});
        	    }

        	    return done(null, user);
        	});
        }
    ));
}