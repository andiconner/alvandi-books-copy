import styled from "styled-components";
import React from 'react';
import ReactDOM from 'react-dom';

const Container = styled.div`
  height: 30px;
  background-color: #048EA9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;