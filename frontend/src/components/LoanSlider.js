import React from 'react';
import styled from 'styled-components';

const Availability = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
`;

const Slider = styled.div`
  padding: ${props => props.loaned ? "6px 0 6px 6px" : "6px 6px 6px 0"};
  background-color: ${props => props.loaned ? "#e10f2d" : "#236126"};
  border-radius: 4px;
  width: 188px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.loaned ? "row" : "row-reverse"};
  justify-content: ${props => props.loaned ? "flex-start" : "flex-end"};
`;

const Thumb = styled.div`
  border-radius: 4px;
  width: 74px;
  height: 37px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
`;

const SliderText = styled.p`
  color: white;
  margin: 0;
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
`

const Owner = styled.p`
  margin-bottom: 0;
  font-size: 12px;
`;

const LoanSlider = (props) => {
  return (
    <Availability>
      <Slider loaned={props.isLoaned} >
        <Thumb />
        <SliderText>{props.isLoaned ? 'On loan' : 'Available' }</SliderText>
      </Slider>
      {
        props.holder
          ? <Owner>Currently with {props.holder}</Owner>
          : <Owner>Located on the {props.location} bookshelf</Owner>
      }
    </Availability>
  );
};

export default LoanSlider;