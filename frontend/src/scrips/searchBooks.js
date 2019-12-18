const searchBooks = (books, query) => {
  return applySearch(books, createPartialMatchRegex(query));
};

const applySearch = (books, regex) => {
  const titleMatches = books.filter(book => book.Title.match(regex));
  const authorMatches = books.filter(book => book.Author.match(regex));

  // Return a unique set of books.
  return [...new Set([...titleMatches, ...authorMatches])];
};

/**
 * Function creates a regex pattern like this: /study|\bstudy pads\b|\bstudy\b|\bpads\b/gi
 * Matches the whole search string including spaces
 * Matches whole words of any length
 * Partial match of words with 5+ characters
 */
const createPartialMatchRegex = (query) => {
  const queryArray = query.split(' ');
  const wholeQueryMatch = `\\b${query}\\b`;
  const partialMatches = queryArray.filter(str => str.length >= 3);
  const matchingPatterns = [...partialMatches, wholeQueryMatch];

  if (queryArray.length > 1) {
    const wholeWordMatch = queryArray
      .filter(str => str)
      .map(word => `\\b${word}\\b`)
      .join('|');

    matchingPatterns.push(wholeWordMatch);
  }

  return new RegExp(matchingPatterns.join('|'), 'gi');
};

export default searchBooks;