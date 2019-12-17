import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/Search';

const StyledLink = styled(Link)`
  background-color: #006200;
  color: white;
  border-radius: 4px;
  border: 0;
  padding: 16px;
  width: 100%;
  font-size: 24px;
  line-height: 18px;
  margin-top: 32px;
  font-weight: bold;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Homepage = (props) => {
  return (
    <ContentWrapper>
      <Search books={props.books} />
      <StyledLink to="/all-books">View all books</StyledLink>
    </ContentWrapper>
  );
};

export default Homepage;