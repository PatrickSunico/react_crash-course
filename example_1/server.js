// Express Init
var express = require('express');
var app = express();

// serve static assets
app.use(express.static('public/'));

// var paths = {
//     index: 'public/index'
// }

// app.get('/', function(req, res) {
//     res.render(paths.index);
// });
// Ports 
var port = Number(process.env.PORT || 3000);

app.listen(port, function() {
    console.log("Server Started");
});