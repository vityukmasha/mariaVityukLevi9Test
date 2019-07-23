import React from 'react';
import styled from 'styled-components';
import {Close} from "../Icons/index";

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #df5d34;
  padding: 0 20px;
  height: 50px;
  .title{
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 24px;
  }
  .exit{
    font-size: 16px;
    color: #f7ddd4;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    svg{
      fill: #f7ddd4;
      margin: 0 0 0 5px;
    }
  }
`;

export default function Footer() {
  return <FooterBox>
    <div className="title">Reserv</div>
    <button className="exit" onClick={() => window.location.reload()}>
      <span>Exit </span><Close />
    </button>
  </FooterBox>
}