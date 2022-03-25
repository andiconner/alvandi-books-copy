import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
