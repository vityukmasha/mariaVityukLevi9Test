import React from 'react';
import styled from 'styled-components';
import {Locked} from "../Icons/index";

const ProductItemBox = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  .img-wr{
    position: relative;
    margin: 0 1.5rem 0 0;
    flex-basis: 80px;
    font-size: 0;
  }
  img {
    max-width: 100%;
  }
  .info-product{
  display: flex;
  flex-direction: column;
  color: #9ea1a7;
   .title{
     color: #373c46;
     font-weight: 700;
     margin: 0 0 10px 0;
   }
  }
  .locked{
    position: absolute;
    top: -10px;
    left: -10px;
    background: #55d068;
    border-radius: 50%;
    padding: 5px;
    border: 2px solid #fafafa;
    svg{
      fill: #fff;
    }
  }
`;


export default function ProductItem({ item, isLocked }) {
  const {img, title, price} = item;
  return (
    <ProductItemBox>
      <div className="img-wr">
        {isLocked && <div className="locked"><Locked /></div>}
        <img src={img} alt=""/>
      </div>
      <div className="info-product">
        <span className="title">{title}</span>
        <span>{price}</span>
      </div>
    </ProductItemBox>
  )
}