const server = require('express');
const data = require('./sample.json');

const app = server();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  const { type } = req.query;
  const ret = data.entries.filter(e => e.programType === type)
  res.send(ret);
});

app.listen(4000);