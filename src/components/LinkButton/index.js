import React from 'react';
import styled from 'styled-components';

const LinkButtonBox = styled.a`
    color: #5abfeb;
    position: relative;
    cursor: pointer;
    &:before{
      content: '';
      height: 1px;
      position: absolute;
      top: 100%;
      left: 50%;
      right: 50%;
      background: #5abfeb;
      transition: .3s cubic-bezier(.45,1.06,.58,1.31);
    }
    &:hover{
      &:before{
        left: 0;
        right: 0;
      }
    }
    
`;

export default function LinkButton(props) {
  return <LinkButtonBox {...props}>{props.children}</LinkButtonBox>
}