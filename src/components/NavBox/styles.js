import styled from 'styled-components';

export const List = styled.ul`
   padding: 0 0 0 30px;
   position: relative;
   :before{
   content: '';
   position: absolute;
   top: -9999px;
   left: 0;
   bottom: 14px;
   width: 1px;
   background: #d4d4d4;
   }
`;

export const ListItem = styled.li`
   padding: 20px 0;
`;

export const LinkStep = styled.a`
   color: #a6aaaf;
   position: relative;
   font-size: 18px;
   text-decoration: none;
   transition: .3s;
   .step {
      left: -46px;
      top: -4px;
      border: 1px solid #d4d4d4;
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      transition: .3s;
      &:before {
        content: '✓';
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #df5d34;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 50%;
        transform: scale(0);
        opacity: 0;
        transition: .3s;
      }
   }
   .title{
      position: relative;
      &:after {
        content: 'Change';
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 12px;
        opacity: 0;
        transition: .3s;
        transform: translate(0, 100%);
      }
   }
   ${({disabled}) => disabled && `
      pointer-events: none;
      .title{
        opacity: .6;
      }
   `};
   ${({active}) => active && `
      color: #df5d34;
      .step{
       border-color: #df5d34;  
      }
   `};
   ${({completed}) => completed && `
      color: #df5d34;
      .step{
       border-color: #df5d34;
       &:before{
        transform: scale(1);
        opacity: 1;
       }
      }
      .title{
        &:after{
          transform: translate(0, 0);
          opacity: 1;
        }
      }
   `}
`;

