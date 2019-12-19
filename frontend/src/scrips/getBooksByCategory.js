const axios = require('axios');

const getAllBooks = (query) => {
  return axios.get(`/api/get-books-by-category/${query}`);
};

export default getAllBooks;