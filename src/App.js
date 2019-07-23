import React from 'react';
import 'reset-css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {AppWrapper, MainCont, Wrapper} from "./styles";
import Header from "./containers/Header/index";
import Aside from "./containers/Aside/index";
import NameAndDuration from "./containers/NameAndDuration/index";
import ShippingAddress from "./containers/ShippingAddress/index";
import SelectAccount from "./containers/SelectAccount/index";
import {GlobalStyle} from "./globalStyles";
import Footer from "./components/Footer/index";
import ThankYou from "./containers/Thanks/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <MainCont>
          <Header />
          <Wrapper>
            <Redirect to="/name-and-duration"/>
            <Route exact path="/name-and-duration" component={NameAndDuration}/>
            <Route path="/shipping-address" component={ShippingAddress}/>
            <Route path="/select-account" component={SelectAccount}/>
            <Route path="/thank-you" component={ThankYou}/>
          </Wrapper>
        </MainCont>
        <Aside />
      </AppWrapper>
      <Footer />
    </Router>
  );
}

export default App;
