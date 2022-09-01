const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/usersDB');

const userSchema = {
  email: String,
  password: String,
};

const User = new mongoose.model('User', userSchema);

app.get('/api', (req, res) => {
  res.json({ users: ['Hello', 'FullStack', 'Developer'] });
});

app.post('/Registration', (req, res) => {
  const newUser = new User({
    email: req.body.login,
    password: req.body.password,
  });
  newUser.save(function (err) {
    let respondMessage;
    if (err) {
      respondMessage = 'Something went wrong!';
    } else {
      respondMessage = 'Succesfully created user!';
    }
    res.send(respondMessage);
  });
});
app.post('/Login', (req, res) => {
  const email = req.body.login;
  const password = req.body.password;
  User.findOne({ email: email }, function (err, foundUser) {
    let respondMessage;
    if (err) {
      respondMessage = 'Something went wrong!';
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          respondMessage = 'Succesfully logged in!';
        } else {
          respondMessage = 'Check your email or password.';
        }
      } else {
        respondMessage = 'Check your email or password.';
      }
    }
    res.send(respondMessage);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
