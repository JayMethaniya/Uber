const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const connect = require('./db/db');
connect();
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
module.exports = app;