// init express
var express = require('express');
var app = express();

// enable CORS so that my API is testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// static files (used only for CSS)
app.use(express.static('public'));

// route for the homepage
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//route for the timestamp or date api
app.get("/api/:timestampOrDate", (req, res) => {
  let input = req.params.timestampOrDate

  //checking if the input is numeric
  if(/^[0-9]*$/.test(input)){
    //if it is then it's a timestamp and I should convert it to a number
    input = parseInt(input, 10)
  }

  //converting it to a date and sending the result as a json
  let date = new Date(input)
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  })
})


// this is totally useless, but maybe FCC requires it since it was in the boilerplate... (?)
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
