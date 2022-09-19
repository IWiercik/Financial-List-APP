require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(logger);

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use('/', require('./routes/api')); // Api Route
app.use('/', require('./routes/preAuth/routes')); //post Routes

mongoose.connect('mongodb://localhost:27017/usersDB');

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
