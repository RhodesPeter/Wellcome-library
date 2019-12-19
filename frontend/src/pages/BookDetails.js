import React from 'react';
import styled from 'styled-components';
import Back from '../components/Back';
import findBookById from '../scrips/findBookById';
import { Link } from 'react-router-dom';
import LoanSlider from '../components/LoanSlider';

const ContentWrapper = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  background-color: #f2f2f2;
  padding: 32px 24px;
`;

const EditWrapper = styled.div`
  padding: 32px 0;
`;

const EditLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-left: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cpath id='a' d='M20 15.8V9.2c0-.5-.3-.8-.8-.8s-.8.3-.8.8v6.7c0 1.4-1.1 2.5-2.5 2.5H4.2c-1.4 0-2.5-1.1-2.5-2.5V4.2c0-1.4 1.1-2.5 2.5-2.5h6.7c.5 0 .8-.3.8-.8s-.4-.9-.9-.9H4.2C1.8 0 0 1.8 0 4.2v11.7C0 18.2 1.8 20 4.2 20h11.7c2.3 0 4.1-1.8 4.1-4.2zm-9.2-4.1H8.9c-.4 0-.6-.3-.6-.6V9.2c0-.2.1-.3.2-.4l6.7-6.6c.8-.7 2-.6 2.7.2.6.7.6 1.8 0 2.5l-6.6 6.7c-.2.1-.3.1-.5.1z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23b)'%3E%3Cdefs%3E%3Cpath id='c' d='M0 0h20v20H0z'/%3E%3C/defs%3E%3CclipPath id='d'%3E%3Cuse xlink:href='%23c' overflow='visible'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23d)'%3E%3Cdefs%3E%3Cpath id='e' d='M-5-5h30v30H-5z'/%3E%3C/defs%3E%3CclipPath id='f'%3E%3Cuse xlink:href='%23e' overflow='visible'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23f)'%3E%3Cdefs%3E%3Cpath id='g' d='M0 0h20v20H0z'/%3E%3C/defs%3E%3CclipPath id='h'%3E%3Cuse xlink:href='%23g' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23h)' fill='%231f2e30' d='M-5-5h30v30H-5z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;

const Title = styled.h1`
  font-size: 24px;
  font-family: Wellcome;
  margin-bottom: 16px;
`;

const Author = styled.p`
  font-size: 20px;
  margin: 16px 0 20px;
`;

const Isbn = styled.p`
  font-size: 12px;
`;

const ConfirmName = styled.div`
  background-color: #f2f2f2;
  padding: 32px 16px 48px;
`;

const ConfirmForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConfirmButton = styled.button`
  background-color: #236126;
  color: white;
  border-radius: 4px;
  border: 0;
  padding: 16px;
  font-size: 24px;
  line-height: 18px;
  margin-top: 32px;
  font-weight: bold;
`;

const CancelButton = styled.button`
  background-color: white;
  border-radius: 4px;
  border: 0;
  padding: 16px;
  font-size: 24px;
  line-height: 18px;
  margin-top: 32px;
  font-weight: bold;
`;

const ConfirmLabel = styled.label`
  text-align: left;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 8px;
  font-family: helvetica;
`;

const BookDetails = (props) => {
  const bookId = props.match.params[0];
  const book = findBookById(props.books, bookId)[0]||{};

  return (
    <ContentWrapper>
      <Back/>
      <ImageContainer>
        {book.ISBN
          ? <img alt={book.Title} src={`http://covers.openlibrary.org/b/isbn/${book.ISBN}-M.jpg`} />
          : <img alt={book.Title} src="http://i.imgur.com/sJ3CT4V.gif" />
        }
        <Title>{book.Title}</Title>
        <Author>{book.Author}</Author>
        <Isbn>{book.ISBN}</Isbn>
      </ImageContainer>
      <LoanSlider { ...book } />
      <ConfirmName>
        <ConfirmForm>
          <ConfirmLabel>Confirm your name</ConfirmLabel>
          <input type="text"></input>
          <ConfirmButton>Loan book</ConfirmButton>
          <CancelButton>Cancel</CancelButton>
        </ConfirmForm>
      </ConfirmName>
      <EditWrapper>
        <EditLink to={`${bookId}/edit`}>Edit book</EditLink>
      </EditWrapper>
    </ContentWrapper>
  );
};

export default BookDetails;