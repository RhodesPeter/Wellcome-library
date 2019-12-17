import React from 'react';
import styled from 'styled-components';

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
  border-color: #006200;
  border-style: solid;
`;

const ListWrapper = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  text-align: left;
  list-style: none;
`;

const AllBooks = (props) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        <PageTitle>View all books</PageTitle>
      </TitleWrapper>
      <ListWrapper>
        {props.books.map(item => (
          <ListItem key={item.id}>{item.Title}</ ListItem>
        ))}
      </ListWrapper>
    </ContentWrapper>
  );
};

export default AllBooks;