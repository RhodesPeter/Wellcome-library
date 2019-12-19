import React from 'react';
import styled from 'styled-components';
import Back from '../components/Back';
import BookList from '../components/BookList';

const ContentWrapper = styled.div`
  width: 100%;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const TitleWrapper = styled.div`
  padding: 0 0 32px;
  border-width: 0 0 2px 0;
  border-color: #236126;
  border-style: solid;
  margin: 0 16px;
`;

const AllBooks = (props) => {
  return (
    <ContentWrapper>
      <Back />
      <TitleWrapper>
        <PageTitle>View all books</PageTitle>
      </TitleWrapper>
      <BookList books={props.books}/>
    </ContentWrapper>
  );
};

export default AllBooks;