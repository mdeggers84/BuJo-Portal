// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// =============================================================

// Set up the Express app
var app = express();
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// Sets up the Express app to handle data parsing (for POST requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Path for static content
app.use(express.static(path.join(__dirname, 'public')));

// Import routes and give the server access to them.
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app, path);

// =============================================================
// Starts the server listening

app.listen(PORT, IP, function () {
  console.log('Life organization happening on PORT / IP ' + PORT + IP + '!');
});
