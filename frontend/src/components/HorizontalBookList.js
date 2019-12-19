import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display:none;
  }
`;

const ListItem = styled.li`
  text-align: left;
  list-style: none;
  margin: 8px;
  min-height: 180px;

  &:first-child {
    margin-left: 16px;
  }
`;

const Title = styled.h1`
  color: #236126;
  text-align: left;
  padding: 8px 16px 0px;
  font-size: 24px;
  margin-bottom: 0;
`;

const HorizontalBookList = (props) => {
  return (
    <div>
      <Title>{ props.title }</Title>
      <ListWrapper>
        {props.books.map(item => (
          <Link key={item.book_id} to={`/books/${item.id}`}>
            <ListItem>
              {item.ISBN
                ? <img alt={item.Title} src={`http://covers.openlibrary.org/b/isbn/${item.ISBN}-M.jpg`} />
                : <img alt={item.Title} src="http://i.imgur.com/sJ3CT4V.gif" />
              }
            </ ListItem>
          </Link>
        ))}
      </ListWrapper>
    </div>
  );
};

export default HorizontalBookList;