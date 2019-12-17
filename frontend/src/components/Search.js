import React, { useState } from 'react';
import styled from 'styled-components';
import searchBooks from '../scrips/searchBooks';
import ResultsList from './ResultsList';

const SearchInput = styled.input`
  background-color: white;
  padding: 8px 8px 8px 32px;
  border-width: 0 0 2px 0;
  border-color: #006200;
  border-style: solid;
  max-width: 300px;
  width: 100%;
  outline: none;
  font-size: 24px;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.204 14.844c-2.933-2.933-2.933-7.704 0-10.636a7.477 7.477 0 0 1 5.32-2.203c2.01 0 3.897.783 5.318 2.203 2.932 2.932 2.932 7.703 0 10.636-2.934 2.932-7.705 2.932-10.638 0m19.502 7.444l-6.774-6.773c3.027-3.738 2.803-9.251-.67-12.725A9.47 9.47 0 0 0 9.522 0a9.464 9.464 0 0 0-6.737 2.79c-3.715 3.714-3.715 9.758 0 13.472a9.497 9.497 0 0 0 6.737 2.786 9.51 9.51 0 0 0 5.991-2.115l6.774 6.773a.996.996 0 0 0 .71.293 1.002 1.002 0 0 0 .709-1.711' fill='%23006200' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left;

  &::placeholder {
    font-size: 24px;
    line-height: 3;
  }
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
      <SearchInput value={value} onChange={handleChange} type="text" placeholder="Search books" />
      {
        searchResults && searchResults.length > 0 && <ResultsList results={searchResults} />
      }
    </div>
  );
};

export default Search;