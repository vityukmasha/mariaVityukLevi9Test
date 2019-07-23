import styled from 'styled-components';

export const NameAndDurationBox = styled.div`
    //display: flex;
    //align-items: flex-start;
`;

export const LockedBox = styled.div`
    display: flex;
    align-items: flex-start;
    .about{
      max-width: 300px;
    }
    .title{
      color: #373c46;
      font-size: 16px;
      font-weight: 500;
      margin: 0 0 10px 0;
    }
    .text{
      color: #9ea1a7;
      font-size: 14px;
      line-height: 1.5;
      a{
        color: #4993d2;
      }
    }
`;

export const Group = styled.div`
    display: flex;
    padding: 20px 0;
    & > div:nth-child(1){
      flex-basis: 200px;
      margin: 0 20px 0 0;
    }
    & > div:nth-child(2){
      flex-basis: calc(100% - 200px - 20px);
    }
`;

export const GroupTitle = styled.div`
   color: #898e93;
   font-size: 18px;
   text-align: right;
   margin: 18px 0 0 0;
`;