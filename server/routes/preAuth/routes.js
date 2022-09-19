const express = require('express');
const router = express.Router();
const passwordHasher = require('../../middleware/bcryptHasher');
const { creatingNewUser, loggingUser } = require('../../moongoose/User');

router.post('/Registration', async function (req, res) {
  let respondMessage;
  const { password: hashedPassword, isHashSuccessful, errorMessage } = await passwordHasher(req.body.password);
  if (isHashSuccessful) {
    await creatingNewUser(req.body.login, hashedPassword).then((result) => (respondMessage = result));
  } else {
    respondMessage = errorMessage;
  }
  res.send(respondMessage);
});

router.post('/Login', (req, res) => {
  const email = req.body.login;
  const password = req.body.password;
  loggingUser(email, password);
});

module.exports = router;
