
/**
 * Module dependencies.
 */

  var express = require('express')
        , passport = require('passport')
        , mongoose = require('mongoose')
        , fs = require('fs')
        , http = require('http');

  var env = process.env.NODE_ENV || 'development';
  var config = require('./config/config')[env];

  fs.readdirSync(__dirname + '/app/models').forEach(function(file) {
      if(file.indexOf('.js')) require(__dirname + '/app/models/' + file)
  });

  require('./config/passport')(passport, config);

  var app = express();

  require('./config/express')(app, config, passport);

  require('./config/routes')(app, passport)

  http.createServer(app).listen(app.get('port'), function() {
      console.log('服务器启动，端口号：' + app.get('port'));
  })

