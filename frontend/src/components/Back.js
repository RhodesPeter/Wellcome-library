import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VisuallyHiddenSpan from '../components/VisuallyHiddenSpan';

const BackButton = styled(Link)`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-213.1 219.1 12.4 12.4'%3E%3Cpath d='M-209.4 219.1c-.2 0-.5.1-.6.3-.4.4-.4.9 0 1.3l4.6 4.6-4.6 4.6c-.4.4-.4.9 0 1.3s.9.4 1.3 0l4.8-4.8c.3-.3.5-.7.5-1.1 0-.4-.2-.8-.5-1.1l-4.8-4.8c-.2-.2-.5-.3-.7-.3z' fill='%23292929'/%3E%3C/svg%3E");
  display: block;
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  background-position: left center;
  left: 8px;
`;

const Back = (props) => {
  return (
    <BackButton to="/">
      <VisuallyHiddenSpan text="back to homepage" />
    </BackButton>
  );
};

export default Back;