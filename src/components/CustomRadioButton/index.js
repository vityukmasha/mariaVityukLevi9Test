import React from 'react';
import styled from 'styled-components';
import {Mastercard, Stripe} from "../Icons/index";

const CustomRadioButtonBox = styled.div`
    box-sizing: border-box;
    min-width: 100px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding: 26px 20px;
    color: #7a7a7a;
    font-size: 16px;
    background: #fafafa;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    svg {
      width: 40px;
      opacity: .5;
    }
    &:last-child{
      margin: 0;
    }
    .check{
      width: 20px;
      height: 20px;
      border: 1px solid #d4d4d4;
      border-radius: 50%;
      background: #fff;
      margin: 0 15px 0 0;
      position: relative;
      transition: .3s;
      &:before{
        content: '';
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: #fff;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transition: .3s;
      }
    }
    .body{
      display: flex;
      align-items: center;
      .title{
        color: #373c46;
        margin: 0 0 5px 0;
      }
      .subTitle{
        font-size: 14px;
      }
    }
    ${({ checked }) => checked && `
       border-color: #df5d34;
       background: #fff;
       .check{
        background: #2196F3;
        &:before {
          transform: translate(-50%, -50%) scale(1);
        }
       }
    `}
`;

export function CustomRadioButtonImg({img}) {
  if (img === 'mastercard') {
    return <Mastercard />
  }
  if (img === 'stripe') {
    return <Stripe />
  }
  return null;
}

export default function CustomRadioButton({option, checked, onSelect}) {
  const {title, subTitle, img, id} = option;
  return (
    <CustomRadioButtonBox checked={checked} onClick={() => onSelect(id)}>
      <div className="body">
        <div className="check" />
        <div>
          <div className="title">
            {title}
          </div>
          <div className="subTitle">
            {subTitle}
          </div>
        </div>
      </div>
      {img && <CustomRadioButtonImg img={img}/>}
    </CustomRadioButtonBox>
  )
}