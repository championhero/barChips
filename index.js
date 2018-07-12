const express = require('express');
const path = require('path');
//Initiate App
const app = express();

//Home Route
app.get('/', function(req, res){
  res.sendfile(__dirname + '/views' + '/index.html');
});

//Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000')
});
