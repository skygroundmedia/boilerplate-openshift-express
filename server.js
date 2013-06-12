#!/bin/env node
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.locals.pretty = true;
  app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
  app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //Favicon
//  app.use(express.favicon( __dirname + "/public/favicon.ico", { maxAge: 2592000000 }));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), app.get('ipaddress'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
