// Express Init
var express = require('express');
var app = express();

// serve static assets
app.use(express.static('dist/'));

// Ports 
var port = Number(process.env.PORT || 3000);

app.listen(port, function() {
    console.log("Server Started");
});