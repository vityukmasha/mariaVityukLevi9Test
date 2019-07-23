import React from 'react';
import { connect } from 'react-redux';
import {ThankYouBox, Title} from "./styles";
import Img from "./payment_success.png";
import Button from "../../components/Button/index";
import {setStep} from "../../actions";
import {Close} from "../../components/Icons/index";
import {IconButton} from "../../components/IconButton/index";

class ThankYou extends React.Component {
  componentDidMount(){
    this.props.dispatch(setStep({
      currentStep: '4',
      pageTitle: 'Thank you!',
    }))
  }
  render() {
    const payments = {
      price: '$45.00',
      id: '56738438783',
    };
    return (
      <ThankYouBox>
        <IconButton onClick={() => window.location.reload()} style={{
          position: 'absolute',
          right: 20,
          top: 20,
        }}>
          <Close />
        </IconButton>
        <Title>Thank you!</Title>
        <div className="img-wr">
          <img src={Img} alt=""/>
        </div>
        <p>
          Your payment <b>{payments.price}</b> has been processe description successful!
          An order сconfirmations hsd been to: <a href="mailto:someone@yoursite.com">someone@yoursite.com</a>
        </p>
        <p>For you reference, your Dwolla transaction id is: <b>{payments.id}</b></p>
        <div className="button-box">
          <Button color="primary">
            <span>Continue shopping</span>
          </Button>
          <Button color="secondary">
            <span>Go to your revers</span>
          </Button>
        </div>
      </ThankYouBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    nameOfReserv: state.nameOfReserv,
    isLocked: state.isLocked,
    startDate: state.startDate,
  }
}


export default connect(mapStateToProps)(ThankYou);