const getAllBooksQuery = `SELECT * FROM books`;

const getAllTitlesQuery = `SELECT title FROM books`;

module.exports = {
  getAllBooksQuery,
  getAllTitlesQuery
}
