import React, { useState } from 'react';
import styled from 'styled-components';
import searchBooks from '../scrips/searchBooks';
import BookList from '../components/BookList';
import VisuallyHiddenSpan from '../components/VisuallyHiddenSpan';

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchInput = styled.input`
  background-color: white;
  padding: 8px 24px 8px 32px;
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

const ClearSearch = styled.button`
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23292929' fill-rule='nonzero'%3E%3Cpath d='M.63 3.943A2.345 2.345 0 0 1 3.955.641l19.358 19.345a2.345 2.345 0 0 1-1.643 4.001 2.284 2.284 0 0 1-1.684-.675L.629 3.943z'/%3E%3Cpath d='M.177 22.55A2.343 2.343 0 0 1 .7 19.984L20.057.63a2.345 2.345 0 0 1 3.302 3.326L4.014 23.312c-.44.44-1.035.687-1.656.688a2.345 2.345 0 0 1-2.18-1.45z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  border: 0;
  right: 0;
  position: absolute;
  top: 15px;
`;

const Search = (props) => {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setValue(event.target.value);
    setSearchResults(searchBooks(props.books, event.target.value));

    if (event.target.value.length === 0){
      handleClear();
    }
  };

  const handleClear = () => {
    setSearchResults([]);
    setValue('');
  };

  return (
    <div>
      <InputWrapper>
        <SearchInput value={value} onChange={handleChange} type="text" placeholder="Search books" />
        {
          value.length > 0 && <ClearSearch onClick={handleClear}><VisuallyHiddenSpan text="Clear search" /></ClearSearch>
        }
      </InputWrapper>
      {
        searchResults && searchResults.length > 0 && <BookList books={searchResults} />
      }
    </div>
  );
};

export default Search;