const express = require('express');
const app = express();

const {stringToDate, dateToJson} = require('./helpers.js')

//#region server setup
//enable CORS so that my API is testable by FCC
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// static files (used only for CSS)
app.use(express.static('public'));
//#endregion

//#region routes
// route for the homepage
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/(:timestampOrDate)", (req, res) => {
  res.json(dateToJson(stringToDate(req.params['timestampOrDate'])))
})

/*
// this is totally useless, but maybe FCC requires it since it was in the boilerplate... (?)
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
*/
//#endregion

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
