// library Import
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');


// here we are creating server
const server = http.createServer(app)
    // define Port Number
const PORT = 4000
    // here we are using Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());

// api path import
const routes = require('./routes');
app.use('/sum', routes.sum_api)

server.listen(PORT, () => console.log(`server is started at the ${PORT}`))