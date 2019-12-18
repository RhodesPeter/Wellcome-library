import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListItem = styled.li`
  text-align: left;
  list-style: none;
  margin: 8px;
  min-height: 180px;
`;

const BookList = (props) => {
  return (
    <ListWrapper>
      {props.books.map(item => (
        <ListItem key={item.id}>
          {item.ISBN
            ? <img alt={item.Title} src={`http://covers.openlibrary.org/b/isbn/${item.ISBN}-M.jpg`} />
            : <img alt={item.Title} src="http://i.imgur.com/sJ3CT4V.gif" />
          }
        </ ListItem>
      ))}
    </ListWrapper>
  );
};

export default BookList;
