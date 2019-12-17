import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import styled from 'styled-components';
import getAllBooks from './scrips/getAllBooks';

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const PageTitle = styled.h1`
  font-size: 36px;
`;

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then(response => setAllBooks(response.data))
      .catch(console.log);
  }, []);

  return (
    <AppWrapper>
      <Header>
        <PageTitle>Wellcome D&T library</PageTitle>
        <Search books={allBooks} />
      </Header>
    </AppWrapper>
  );
}

export default App;
