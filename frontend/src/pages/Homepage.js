import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/Search';
import HorizontalBookList from '../components/HorizontalBookList';
import getBooksByCategory from '../scrips/getBooksByCategory';

const StyledLink = styled(Link)`
  background-color: #236126;
  color: white;
  border-radius: 4px;
  border: 0;
  padding: 16px;
  font-size: 24px;
  line-height: 18px;
  margin-top: 32px;
  font-weight: bold;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  padding: 0 16px;
  width: 100%;
  margin-bottom: 40px;
`;

const Homepage = (props) => {
  const [softwareBooks, setSoftwareBooks] = useState([]);
  const [designBooks, setDesignBooks] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    getBooksByCategory('Technology, software and data')
      .then(response => setSoftwareBooks(response.data))
      .catch(console.log);

    getBooksByCategory('Design, content and research')
      .then(response => setDesignBooks(response.data))
      .catch(console.log);
  }, []);

  return (
    <ContentWrapper>
      <Search setSearchStatus={setIsSearchActive} books={props.books} />
      {
        !isSearchActive ?
          <>
            <HorizontalBookList title="Software and data" books={softwareBooks} />
            <HorizontalBookList title="Design, content and research" books={designBooks} />
            <ButtonWrapper>
              <StyledLink to="/all-books">View all books</StyledLink>
            </ButtonWrapper>
          </> : ''
      }
    </ContentWrapper>
  );
};

export default Homepage;