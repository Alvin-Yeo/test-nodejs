// load modules
const express = require('express');
const cors = require('cors');

// configure port
const PORT = parseInt(process.argv[2]) || process.env.PORT || 3001;

// create an instance of express
const app = express();
app.use(cors());

// GET /num1
app.get('/number', (req, res) => {
  res.status(200);
  res.type('application/json');
  res.json({ number: Math.random().toFixed(3) });
});

// start server
app.listen(PORT, () => {
  console.info(`Application started on PORT ${PORT} at ${new Date()}`);
});
