const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.json({ users: ['Hello', 'FullStack', 'Developer'] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
