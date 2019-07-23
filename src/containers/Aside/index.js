import React from 'react';
import {connect} from 'react-redux';
import {AsideBox} from "./styles";
import NavBox from "../../components/NavBox/index";
import OrderSummary from "../../components/OrderSummary/index";

function Aside({currentStep, isLocked}) {
  const steps = [
    {
      step:'1',
      name: 'Set name and duration',
      route: 'name-and-duration',
    },
    {
      step:'2',
      name: 'Shipping address',
      route: 'shipping-address',
    },
    {
      step:'3',
      name: 'Select account',
      route: 'select-account',
    },
    {
      step:'4',
      name: 'Confirm you reserv',
      route: 'thank-you',
    },
  ];
  return (
    <AsideBox>
      <NavBox steps={steps} currentStep={currentStep}/>
      <OrderSummary isLocked={isLocked} />
    </AsideBox>
  )
}

function mapStateToProps(state) {
  return {
    currentStep: state.currentStep,
    isLocked: state.isLocked,
  }
}

export default connect(mapStateToProps)(Aside);