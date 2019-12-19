import React, { useState } from 'react';
import styled from 'styled-components';
import loanBook from '../scrips/loanBook';

const ConfirmNameSection = styled.div`
  background-color: #f2f2f2;
  padding: 32px 18px 48px;
`;

const ConfirmForm = styled.form`
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
  margin-top: 32px;
  font-weight: bold;
`;

const ConfirmLabel = styled.label`
  text-align: left;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 8px;
  font-family: helvetica;
`;

const ConfirmInput = styled.input`
  height: 45px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #236126;
`;

const ConfirmName = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => setInputValue(event.target.value);
  const preventDefault = event => event.preventDefault();

  const handleLoanClick = () => {
    // Could add validation and error messages here
    if (inputValue.length === 0) return;

    loanBook(props.bookId, inputValue)
      .then(() => {
        props.updateLoanValue(true);
        props.updateLoanHolder(inputValue);
      })
      .catch(console.log);
  };

  return (
    <ConfirmNameSection>
      <ConfirmForm onSubmit={preventDefault}>
        <ConfirmLabel>Confirm your name</ConfirmLabel>
        <ConfirmInput onChange={handleChange} placeholder="e.g. Peter Rhodes" type="text" value={inputValue} />
        <ConfirmButton onClick={handleLoanClick} type="submit">Loan book</ConfirmButton>
      </ConfirmForm>
    </ConfirmNameSection>
  );
};

export default ConfirmName;