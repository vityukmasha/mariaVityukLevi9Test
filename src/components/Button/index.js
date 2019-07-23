import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
  background: #87CEFA;
  border: none;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  border-radius: 5px;
  letter-spacing: .1em;
  transition: .3s;
  padding: 0 20px;
  outline: none;
  cursor: pointer;
  :hover{
    background: #4ca2c7;
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg:last-child {
    margin: 0 0 0 5px;
    width: 20px;
  }
  svg:first-child {
    margin: 0 5px 0 0;
    width: 20px;
  }
  ${({ color }) => color === 'primary' && `
    background: #5abfeb;
    color: #fff;
    svg {
      fill: #fff;
    }
  ` };
  ${({color}) => color === 'secondary' && `
    background: #fff;
    color: #545b64;
    border: 1px solid #d4d4d4;
    :hover{
      background: #fbf8f8;
    }
  ` };
  ${({disable}) => disable && `
    pointer-events: none;
    opacity:.5;
  ` };
`;

export default function Button(props) {
  return <ButtonBox {...props}>{props.children}</ButtonBox>
}