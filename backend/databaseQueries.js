const getAllBooksQuery = `SELECT * FROM books`;

const getAllTitlesQuery = `SELECT title FROM books`;

const getBooksByCategory = (categoryTitle) => {
  return `
    SELECT * FROM books b
    JOIN book_category bc ON b.id = bc.book_id
    JOIN category c ON bc.category_id = c.id
    WHERE c.category = "${categoryTitle}";
  `
};

const updateLoanInfo = (bookId, name) => {
  return `
    UPDATE books
    SET On_loan = 1, holder = "${name}"
    WHERE id = ${bookId};
  `
};

const deleteLoanInfo = (bookId) => {
  return `
    UPDATE books
    SET On_loan = 0, holder = NULL
    WHERE id = ${bookId};
  `;
};

module.exports = {
  getAllBooksQuery,
  getAllTitlesQuery,
  getBooksByCategory,
  updateLoanInfo,
  deleteLoanInfo
}
