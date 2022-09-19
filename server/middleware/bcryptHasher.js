const bcrypt = require('bcrypt');
const saltRounds = 10;
const bcryptPasswordHasher = async function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        resolve({
          errorMessage: 'Something went wrong with hashing password, please try again later!',
          password: undefined,
          isHashSuccessful: false,
        });
      } else {
        resolve({
          errorMessage: 'Succesfully hashed password!',
          password: hash,
          isHashSuccessful: true,
        });
      }
    });
  });
};
module.exports = bcryptPasswordHasher;
