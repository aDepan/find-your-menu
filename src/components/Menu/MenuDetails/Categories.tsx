import React from 'react';
import Products from './Products';

import {CategoriesType} from '../../../types';

type CategoriesProps = {
  categories: CategoriesType[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const categoriesList = categories.map(cat => {
    return (
      <div key={cat.name}>
        <h4>{cat.name}</h4>
        <Products products={cat.products} />
      </div>
    );
  });
  return <div>{categoriesList}</div>;
};

export default Categories;
