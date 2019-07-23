import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import CustomRadioButton from "../../components/CustomRadioButton/index";
import {onChangeShipping, setStep} from "../../actions";
import Button from "../../components/Button/index";
import LinkButton from "../../components/LinkButton/index";
import {ButtonBox} from "./styles";
import {ShippingWrapper} from "../../styles";
import {Link} from "react-router-dom";

class ShippingAddress extends React.Component {
  componentDidMount(){
    this.props.dispatch(setStep({
      currentStep: '2',
      pageTitle: 'Choose a shipping address',
    }))
  }

  render() {
    const {shippingAddress, dispatch} = this.props;
    const options = [
      {
        id: '1',
        title: 'Home',
        subTitle: 'Some address',
      },
      {
        id: '2',
        title: 'Office',
        subTitle: 'Some address 2',
      },
    ];
    return (
      <Fragment>
        <ShippingWrapper>
          {options.map(i => (
            <CustomRadioButton
              checked={shippingAddress === i.id}
              key={i.id}
              option={i}
              onSelect={selectedAddress => dispatch(onChangeShipping(selectedAddress))}
            />
          ))}
          <ButtonBox>
            <Button color="primary" as={Link} to="/select-account">
              <span>Ship to this address</span>
            </Button>
            <LinkButton>Ship to a new address</LinkButton>
          </ButtonBox>
        </ShippingWrapper>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    shippingAddress: state.shippingAddress,
  }
}


export default connect(mapStateToProps)(ShippingAddress);