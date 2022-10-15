const User = require('../models/User');
// const Wallet = require('../models/Wallet');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
// GET
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' });
  }
  res.json(users);
});
// POST
const createNewUser = asyncHandler(async (req, res) => {
  const { login: email, password } = req.body;
  const saltRounds = 10;

  //Confirm data
  if (!email || !password) return res.status(400).json({ message: 'All fields are required!' });

  //Check for duplicate
  const duplicate = await User.findOne({ email }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: 'There is already created account with this email.' });
  }


  //Hash pasword
  const hashedPwd = await bcrypt.hash(password, saltRounds);
  const userObject = { email, password: hashedPwd };

  //Create and store new user
  const user = await User.create(userObject);
  if (user) {
    res.status(201).json({ message: `New user created!` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});
// PATCH
const updateUser = asyncHandler(async (req, res) => {
  const { id, email, password } = req.body;
  if (!id || !email) {
    return res.status(400).json({ message: 'All fields are required!' });
  }
  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: 'User not found!' });
  }
  user.email = email;
  if (password) {
    //Hash password
    const saltRounds = 10;
    user.password = await bcrypt.hash(password, saltRounds);
    const updatedUser = await user.save();

    res.json({ message: `Data updated!` });
  }
});
// DELETE
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'User ID required!' });
  }
  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: 'User not found!' });
  }
  const result = await user.deleteOne();
  const reply = `Username ${result.email} deleted`;
  res.json(reply);
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
