var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})


app.get('/contact.html', function (req, res) {
   res.sendFile( __dirname + "/" + "contact.html" );
})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
   response = {
   		phone_number:req.query.phone_number,
       first_name:req.query.first_name,
       last_name:req.query.last_name,
       interest1:req.query.interest1,
       interest2:req.query.interest2,
       interest3:req.query.interest3,
       interest4:req.query.interest4
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})