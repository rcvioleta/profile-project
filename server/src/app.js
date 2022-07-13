const express = require('express');

const testRouter = require('./routes/test.router');

const app = express();

app.use((req, res, next) => {
  console.log('[originalUrl]', req.originalUrl);
  console.log('[method]', req.method);
  next();
});
app.use(express.json());
app.use(testRouter);

module.exports = app;