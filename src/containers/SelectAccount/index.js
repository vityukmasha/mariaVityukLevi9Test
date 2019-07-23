import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import CustomRadioButton from "../../components/CustomRadioButton/index";
import {onChangeAccount, setStep} from "../../actions";
import Button from "../../components/Button/index";
import {ButtonBox} from "../ShippingAddress/styles";
import LinkButton from "../../components/LinkButton/index";
import {Link} from "react-router-dom";

class SelectAccount extends React.Component {
  componentDidMount(){
    this.props.dispatch(setStep({
      currentStep: '3',
      pageTitle: 'Choose a payment',
    }))
  }

  render() {
    const {selectedAccount, dispatch} = this.props;
    const options = [
      {
        id: '1',
        title: 'Bryce Duffy',
        subTitle: 'Some address',
        img: 'mastercard',
      },
      {
        id: '2',
        title: 'Jenny Johanneson',
        subTitle: 'Some address 2',
        img: 'stripe',
      },
    ];
    return (
      <Fragment>
        {options.map(i => (
          <CustomRadioButton
            checked={selectedAccount === i.id}
            key={i.id}
            option={i}
            onSelect={selectAccount => dispatch(onChangeAccount(selectAccount))}
          />
        ))}
        <ButtonBox>
          <Button color="primary" as={Link} to="/thank-you">
            <span>Finalise Reserv</span>
          </Button>
          <LinkButton>Add another account</LinkButton>
        </ButtonBox>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedAccount: state.selectedAccount,
  }
}


export default connect(mapStateToProps)(SelectAccount);