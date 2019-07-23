import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    align-items: center;
    span:first-child{
      color: #545b64;
      text-transform: uppercase;
      white-space: nowrap;
      position: relative;
      margin: 0 20px 0 0;
    }
    span:last-child{
      height: 1px;
      flex-grow: 1;
      background: #d4d4d4;
    }
`;

export const ListPayment = styled.div`
    border-top: 1px solid #d4d4d4;
`;

export const ItemPayment = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
    color: #666666;
    span{
      font-size: 16px;
    :nth-child(1){
      color: #a6aaaf;
    }
    :nth-child(2){
      font-weight: 700;
      color: black;
      }
    }
`;


