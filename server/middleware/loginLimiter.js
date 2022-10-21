const rateLimit = require('express-rate-limit');
const { logEvents } = require('./logger');

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 5 login requests per 'window' per minute
  message: {
    message: 'Too many login attemps from this IP, please try again after a 60 seconds pause',
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too many requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      'errLog.log'
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, //Return rate limit info in the 'Rate limit header"
  legacyHeaders: false, // Disable the 'X rate limit'
});

module.exports = loginLimiter;
