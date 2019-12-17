import React, { useState } from 'react';
import styled from 'styled-components';
import searchBooks from '../scrips/searchBooks';
import ResultsList from './ResultsList';

const SearchInput = styled.input`
  background-color: white;
  padding: 8px;
  border: 1px solid black;
`;

const Search = (props) => {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setValue(event.target.value);
    setSearchResults(searchBooks(props.books));
  };

  return (
    <div>
      <SearchInput value={value} onChange={handleChange} type="search" placeholder="Search books" />
      {
        searchResults && searchResults.length > 0 && <ResultsList results={searchResults} />
      }
    </div>
  );
};

export default Search;