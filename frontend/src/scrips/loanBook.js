const axios = require('axios');

const loanBook = (bookId, name) => {
  return axios.post('/api/loan-book', { bookId, name });
};

export default loanBook;
