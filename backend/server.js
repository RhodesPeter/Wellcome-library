const express = require('express');
const path = require('path');
const app = express();
const getFromDatabase = require('./getFromDatabase');
const { getAllBooksQuery, getBooksByCategory } = require('./databaseQueries');

const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static('frontend/build'));

// Put all API endpoints under '/api'
app.get('/api/get-books', (req, res) => {
  getFromDatabase(getAllBooksQuery)
    .then(data => {
      // Return them as json
      res.json(data)
    });
});

app.get('/api/get-books-by-category/:category', (req, res) => {
  getFromDatabase(getBooksByCategory(req.params.category))
    .then(data => {
      res.json(data)
    });
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port);

console.log(`Listening on port ${port}`);