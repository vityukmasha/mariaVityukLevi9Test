import React from 'react';
import styled from 'styled-components';

const SwitchBox = styled.div`
  cursor: pointer;
  input[type="checkbox"] {
    position: absolute;
    margin: 8px 0 0 16px;
    cursor: pointer;    
  }
  input[type="checkbox"] + label {
    position: relative;
    padding: 5px 0 0 50px;
    line-height: 2.0em;
  }
  input[type="checkbox"] + label:before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 40px; /* x*5 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] + label:after {
    content: "";
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    width: 24px; /* x*3 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] + label:hover:after {
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
  }
  input[type="checkbox"]:checked + label:after {
    margin-left: 16px;
  }
  input[type="checkbox"]:checked + label:before {
    background: #55D069;
  }
`;


export default function Switch({id, label, onChange, checked}) {
  return (
    <SwitchBox>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} value={id}/>
      <label htmlFor={id}>{label}</label>
    </SwitchBox>
  )
}