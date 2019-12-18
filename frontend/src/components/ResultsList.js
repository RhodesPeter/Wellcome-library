// @TODO NOT USING THIS FILE CURRENTLY - DELETE IT?

import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  text-align: left;
  font-size: 18px;
`;

const ResultsList = (props) => {
  return (
    <List>
      {props.results.map(item => (
        <li key={item.id}>{item.Title}</li>
      ))}
    </List>
  );
};

export default ResultsList;