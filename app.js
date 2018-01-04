'use strict';

const express = require('express');
const nbind = require('nbind');
const http = require('http');

const binding = nbind.init(__dirname);
const lib = binding.lib;
const app = express();

const v1 = express.Router();
app.use('/', v1);

v1.get('/dummy', function(req, res) {
  const date = Date.now();
  res.json({date});
});

v1.get('/block', function(req, res) {
  console.log('this call will block for 30s');
  new Promise((resolve) => {
    lib.foo();
    resolve();
  }).then(() => {
    res.json({ done: true});
  });
});

const server = http.createServer(app);
server.listen(7777, '0.0.0.0', () => {
  console.log('STARTUP_COMPLETE');
});
