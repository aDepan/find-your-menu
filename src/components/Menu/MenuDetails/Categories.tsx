import React from 'react';
import Products from './Products';

type CategoriesProps = {
  categories: Array<{
    name: string,
    products: Array<{name: string, price: number }>
  }>}

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
