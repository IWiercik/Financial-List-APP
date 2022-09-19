const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
router.get('/api', userController.getUserData);

module.exports = router;
