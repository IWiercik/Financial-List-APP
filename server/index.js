require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

app.use(logger);

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect('mongodb://localhost:27017/usersDB');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = new mongoose.model('User', userSchema);

app.get('/api', (req, res) => {
  res.json({ users: ['Hello', 'FullStack', 'Developer'] });
});

app.post('/Registration', (req, res) => {
  const promise = new Promise((resolve, reject) => {
    let respondMessage;
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      const newUser = new User({
        email: req.body.login,
        password: hash,
      });
      newUser.save(function (err) {
        if (err) {
          respondMessage = 'Something went wrong!';
        } else {
          respondMessage = 'Succesfully created user!';
        }
      });
    });
    // .then(() => {
    //   console.log('koniec');
    // });
  });
  // promise.then(() => {
  //   res.send(respondMessage);
  // });
});
app.post('/Login', (req, res) => {
  const email = req.body.login;
  const password = req.body.password;
  console.log('[email]', email);
  console.log('[password]', password);

  User.findOne({ email: email }, function (err, foundUser) {
    let respondMessage;
    // if (err) {
    //   respondMessage = 'Something went wrong!';
    // } else {
    //   if (foundUser) {
    //     console.log('[found User!]');
    //     bcrypt.compare(password, foundUser.password, function (err, result) {
    //       if (result === true) {
    //         respondMessage = 'Succesfully logged in!';
    //       } else {
    //         respondMessage = 'Check your email or password.';
    //       }
    //     });
    //   } else {
    //     respondMessage = 'There is no user with this email!';
    //   }
    // }
    res.send(respondMessage);
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
