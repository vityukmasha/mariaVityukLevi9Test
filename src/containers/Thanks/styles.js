import styled from 'styled-components';

export const ThankYouBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background: #fff;
    .button-box{
      display: flex;
      justify-content: space-between;
      button{
        margin: 0 10px;
      }
    }
    .img-wr{
      flex-basis: 200px;
      margin: 10px 0;
    }
    img{
      max-width: 100%;
    }
    p{
      color: #9ea1a7;
      font-size: 14px;
      line-height: 1.8;
      max-width: 400px;
      text-align: center;
      margin: 10px 0;
      a{
        color: #5abfeb;
      }
      b{
        font-weight: bold;
        color: #373c46;
      }
    }
`;

export const Title = styled.div`
    color: #373c46;
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 10px 0;
`;

