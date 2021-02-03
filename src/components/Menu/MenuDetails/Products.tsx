import React from 'react';
import './Products.css';

import {ProductsType} from '../../../types';

type ProductsProps = {
  products: ProductsType[]
}

const Products:React.FC<ProductsProps> = ({ products }) => {
  const productsList = products.map(prod => {
    const prodInfo = `${prod.name} . . ${prod.price} kr.`;
    return <p key={prod.name}>{prodInfo}</p>;
  });
  return <div className='Products-list'>{productsList}</div>;
};

export default Products;
