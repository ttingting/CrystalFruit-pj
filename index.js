var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var jsonfile = require('jsonfile');
var file = 'C:/Users/Kyunglok/Desktop/Crystal Fruit/kyle/users.json'
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


app.get('/contact', function (req, res) {
   res.sendFile( __dirname + "/" + "contact.html" );
})

app.get('/getUsers', function(req, res){    
  res.setHeader('Content-Type', 'application/json');
  jsonfile.readFile(file, function(err, obj) {
    res.end(JSON.stringify(obj));
    console.log(obj);
  })
});

function checkIfNumberExists(number){
  jsonfile.readFile(file,function(err,obj){
    for(var i=0; i<obj.users.length; i++){
      if(number==obj.users[i].phone){
        return true;
      }
    }
  })
  return false;
}

function pushNewData(newUserData){
  jsonfile.readFile(file,function(err,obj){
    var users = obj.users;
    users.push(newUserData);
    jsonfile.writeFileSync(file,users, {spaces:2});
  })
}


app.post('/addNewUser', function(req,res){
  if(checkIfNumberExists(req.body.phone)){
    console.log("failed to register a new user");
    res.json(req.body);
  }
  else{
    pushNewData(req.body);
    console.log("Registration success!");
  }
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})