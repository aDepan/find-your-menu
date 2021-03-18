import React from 'react';
import Products from './Products';

import { CategoriesType } from '../../../types';

import styled from 'styled-components';

const StyledCategory = styled.div`
  & > h4 {
    background-color: #f9f9f9;
    padding: 0px 3px;
    text-transform: uppercase;
  }

  & > div {
    text-align: left;
    padding-left: 15px;
  }
`;

type CategoriesProps = {
  categories: CategoriesType[];
};

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const categoriesList = categories.map(cat => {
    return (
      <StyledCategory key={cat.name}>
        <h4>{cat.name}</h4>
        <Products products={cat.products} />
      </StyledCategory>
    );
  });
  return <div>{categoriesList}</div>;
};

export default Categories;
