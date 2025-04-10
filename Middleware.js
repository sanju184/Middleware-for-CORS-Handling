// Problem: 

// You are building an API that will be consumed by a front-end application running on a different domain. However, there is a CORS issue.

// const express = require('express');
// const app = express();

// app.get('/data', (req, res) => {
// res.json({ message: 'Data fetched successfully' });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


// Modify the code to handle CORS and allow all origins to access the API.


// Solution : 

const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

app.get('/data', (req, res) => {
  res.json({ message: 'Data fetched successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));