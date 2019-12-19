import React from 'react';
import styled from 'styled-components';
import returnBook from '../scrips/returnBook';

const ReturnSection = styled.div`
  background-color: #f2f2f2;
  padding: 40px 18px;
  display: flex;
  flex-direction: column;
`;

const ConfirmButton = styled.button`
  background-color: #236126;
  color: white;
  border-radius: 4px;
  border: 0;
  padding: 16px;
  font-size: 20px;
  line-height: 18px;
  font-weight: bold;
`;

const Return = (props) => {
  console.log(props);

  const handleClick = () => {
    returnBook(props.bookId)
      .then(() => {
        props.updateLoanValue(false);
        props.updateLoanHolder(`Located on the ${props.bookLocation} bookshelf`);
      })
      .catch(console.log);
  };

  return (
    <ReturnSection>
      <ConfirmButton onClick={handleClick} type="submit">Return book</ConfirmButton>
    </ReturnSection>
  );
};

export default Return;