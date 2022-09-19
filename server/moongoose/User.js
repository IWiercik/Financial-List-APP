const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = new mongoose.model('User', userSchema);

const creatingNewUser = async (login, password) => {
  const newUser = new User({
    email: login,
    password: password,
  });
  return newUser
    .save()
    .then((user) => {
      return 'Succesfully created User!';
    })
    .catch((error) => {
      return 'Something went wrong with creating user, try again later!';
    });
};

const loggingUser = async function (email, password) {
  let respondMessage;
  User.findOne({ email: email }, function (err, foundUser) {
    if (err) {
      respondMessage = 'Something went wrong!';
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) {
            respondMessage = 'Succesfully logged in!';
          } else {
            respondMessage = 'Check your email or password.';
          }
        });
      } else {
        respondMessage = 'There is no user with this email!';
      }
    }
    console.log(respondMessage);
  });
};

module.exports = { creatingNewUser, loggingUser };
// respondMessage = 'Something went wrong, try again later!';
// respondMessage = 'Succesfully created User!';
