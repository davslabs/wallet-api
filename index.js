require('dotenv').config();

const http = require('http');
const httpError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const core = require('./routes/core.route');
const api = require('./routes/api.route');

const errorHandler = require('./helpers/error');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', core);
app.use('/api/v1/', api);

app.use((req, res, next) => {
    next(httpError(404));
});

app.use((err, req, res, next) => {
    errorHandler(err, res);
});

server.listen(port, () => console.log(`Rest API listening on port: ${port}`));

module.exports = app;
