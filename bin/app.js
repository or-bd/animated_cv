const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { SERVER_PORT } = require('./ports.json');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

const server = http.createServer(app);
server.listen(SERVER_PORT);
