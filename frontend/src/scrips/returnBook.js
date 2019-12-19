const axios = require('axios');

const returnBook = (bookId) => {
  return axios.post('/api/return-book', { bookId });
};

export default returnBook;