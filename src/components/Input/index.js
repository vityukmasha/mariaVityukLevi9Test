import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
    height: 52px;
    box-sizing: border-box;
    min-width: 100px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    outline: none !important;
    padding: 0 15px;
    color: #7a7a7a;
    font-size: 16px;
    
    ${({ fullWidth }) => fullWidth === 'fullWidth' && 'width: 100%;' };
`;

export default function Input({value, onChange, id, type, placeholder, fullWidth}) {
  return <InputBox type={type} fullWidth={fullWidth} value={value} onChange={onChange} id={id} placeholder={placeholder}/>
}