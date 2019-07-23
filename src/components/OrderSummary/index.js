import React from 'react';
import {
  ItemPayment, ListPayment, Title,
} from "./styles";
import ProductList from "../ProductList/index";
import backpack from "./backpack.jpeg";


export default function OrderSummary({isLocked}) {
  const products = [{
    id: '1',
    img: backpack,
    title: 'Icon Backpack',
    price: '$199',
  }];
  const orderSummery = {
    items: '1',
    subtotal: '$199',
    shipping: 'Free!',
    tax: '0',
  };

  return (
    <div>
      <Title><span>Order Summary</span><span /></Title>
      <ProductList products={products} isLocked={isLocked} />
      <ListPayment>
        <ItemPayment>
          <span>Subtotal ({orderSummery.items} Item)</span>
          <span>{orderSummery.subtotal}</span>
        </ItemPayment>
        <ItemPayment>
          <span>Shipping</span>
          <span>{orderSummery.shipping}</span>
        </ItemPayment>
        <ItemPayment>
          <span>Tax</span>
          <span>{orderSummery.tax}</span>
        </ItemPayment>
      </ListPayment>
    </div>
  )
}