import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './pages/Homepage';
import AllBooks from './pages/AllBooks';
import BookDetails from './pages/BookDetails';
import getAllBooks from './scrips/getAllBooks';

const AppWrapper = styled.div`
  text-align: center;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 88px 0 0;
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 43 38'%3E%3Cdefs%3E%3Cstyle%3E.cls-1,.cls-2,.cls-5%7Bfill:none;%7D.cls-2%7Bclip-rule:evenodd;%7D.cls-3%7Bclip-path:url(%23clip-path);%7D.cls-4%7Bfill:%23fff;%7D.cls-5%7Bstroke:%23221f20;stroke-miterlimit:10;stroke-width:2.5px;%7D.cls-6%7Bclip-path:url(%23clip-path-2);%7D.cls-7%7Bclip-path:url(%23clip-path-3);%7D%3C/style%3E%3CclipPath id='clip-path' transform='translate(3.75 3.75)'%3E%3Crect class='cls-1' x='1.25' y='1.25' width='33' height='23'/%3E%3C/clipPath%3E%3CclipPath id='clip-path-2' transform='translate(3.75 3.75)'%3E%3Cpolygon class='cls-2' points='6.25 6.26 6.25 29.25 18.25 25.24 18.25 2.25 6.25 6.26'/%3E%3C/clipPath%3E%3CclipPath id='clip-path-3' transform='translate(3.75 3.75)'%3E%3Cpolygon class='cls-2' points='30.25 6.26 30.25 29.25 18.25 25.24 18.25 2.25 30.25 6.26'/%3E%3C/clipPath%3E%3C/defs%3E%3Ctitle%3EBook-icon%3C/title%3E%3Cg class='cls-3'%3E%3Crect class='cls-4' width='43' height='33'/%3E%3C/g%3E%3Crect class='cls-5' x='5' y='5' width='33' height='23'/%3E%3Cg class='cls-6'%3E%3Crect class='cls-4' x='5' y='1' width='22' height='37'/%3E%3C/g%3E%3Cpolygon class='cls-5' points='10 10.01 10 33 22 28.99 22 6 10 10.01'/%3E%3Cg class='cls-7'%3E%3Crect class='cls-4' x='17' y='1' width='22' height='37'/%3E%3C/g%3E%3Cpolygon class='cls-5' points='34 10.01 34 33 22 28.99 22 6 34 10.01'/%3E%3C/svg%3E");
  background-position: center 16px;
  background-repeat: no-repeat;
  background-size: 48px;
`;

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then(response => setAllBooks(response.data))
      .catch(console.log);
  }, []);

  return (
    <BrowserRouter>
      <AppWrapper>
        <Main>
          <Switch>
            <Route exact path="/" render={() => <Homepage books={allBooks} />} />
            <Route path="/all-books" render={() => <AllBooks books={allBooks}/>} />
            <Route path="/books/*" render={(props) => <BookDetails {...props} books={allBooks} />} />
          </Switch>
        </Main>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
