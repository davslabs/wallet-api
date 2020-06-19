const http = require('http');
const error = require('http-errors');
const express = require('express');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const coreRouter = require('./routes/core');

const errorHandler = require('./helpers/error');

app.use(express.json());

app.use('/', coreRouter);

app.use((req, res, next) => {
    next(error(404));
});

app.use((err, req, res, next) => {
    errorHandler(err, res);
});

server.listen(port, () => console.log(`Server listening on port: ${port}`));

module.exports = app;
