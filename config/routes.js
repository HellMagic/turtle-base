//Module dependencies
var mongoose = require('mongoose');
var passportOptions = {
    failureFlash: '用户名或密码不正确',
    failureRedirect: '/login'
}

//controllers


//Expose

module.exports = function(app, passport) {
    console.log('routes config...');
}