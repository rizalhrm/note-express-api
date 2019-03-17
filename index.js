const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds.mlab.com:00000/mongooDBcloud');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routers);

app.use(function(err, req, res, next) {
  res.status(422).send({err: err.message})
});

app.listen(process.env.port || 5000, function() {
  console.log('E-Notes API now listening requests')
});

