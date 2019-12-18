import React from 'react';
import styled from 'styled-components';

const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const VisuallyHiddenSpan = (props) => (
  <VisuallyHidden>{ props.text }</VisuallyHidden>
);

export default VisuallyHiddenSpan;