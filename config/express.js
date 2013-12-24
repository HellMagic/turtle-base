// all environments
var express = require('express');
var flash = require('connect-flash');
var env = process.env.NODE_ENV || 'development';
var pkg = require('../package');


module.exports = function(app, config, passport) {
    console.log('express config...');
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'ejs');
    
    app.configure(function() {
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        app.use(express.cookieParser());
        app.use(express.session({
        	secret : pkg.name
        }));

        //Passport session
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(flash());

        app.use(app.router);
        app.use(express.static(config.staticPath));
    });

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }
}