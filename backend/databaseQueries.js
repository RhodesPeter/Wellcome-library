const getAllBooksQuery = `SELECT * FROM books`;

const getAllTitlesQuery = `SELECT title FROM books`;

const getBooksByCategory = (categoryTitle) => {
  return `
    SELECT * FROM books b
    JOIN book_category bc ON b.id = bc.book_id
    JOIN category c ON bc.category_id = c.id
    WHERE c.category = "${categoryTitle}";
  `
}

module.exports = {
  getAllBooksQuery,
  getAllTitlesQuery,
  getBooksByCategory
}
