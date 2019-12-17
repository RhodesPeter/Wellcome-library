const axios = require('axios');

const getAllBooks = () => {
  return axios.get('/api/get-books');
};

export default getAllBooks;