const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  money: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('User', walletSchema);
