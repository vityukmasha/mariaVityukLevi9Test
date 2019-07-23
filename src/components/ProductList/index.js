import React from 'react';
import styled from 'styled-components';
import ProductItem from "./ProductItem";

const ProductListBox = styled.ul`
  padding: 10px 0;
  margin: 20px 0;
`;


export default function ProductList({products, isLocked}) {
  return <ProductListBox>{products.map(i => <ProductItem key={i.id} item={i} isLocked={isLocked}/>)}</ProductListBox>
}