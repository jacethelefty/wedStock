//Requiring modules
const express = require('express');
const mongoose = require('mongoose');
const app = module.exports = exports = express();
const fs = require ('fs');
const credentials = require(__dirname + '/credentials');
const cookieParser = require('cookie-parser');

//Our routes
var profileRouter = require( __dirname + '/routes/profile_routes');
var authRouter = require( __dirname + '/routes/auth_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/stockwatcher_db');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser(credentials.cookieSecret));
app.use(profileRouter);
app.use(authRouter);

var portUsed = process.env.PORT || 3000;

app.listen(portUsed , () => {
	console.log( 'Server running on port ' + portUsed );
});
