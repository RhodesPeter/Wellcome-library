const findBookById = (books, id) => {
  return books.filter(book => book.id === +id);
};

export default findBookById;