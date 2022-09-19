const getUserData = (req, res) => {
  res.json({ users: ['Hello', 'FullStack', 'Developer'] });
};

module.exports = {
  getUserData,
};
