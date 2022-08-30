const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ users: ['Hello', 'FullStack', 'Developer'] });
});

app.post('/Registration', (req, res) => {
  console.log(req.body);
  res.end();
});
app.post('/Login', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
