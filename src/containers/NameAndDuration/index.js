import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Group, GroupTitle, LockedBox, NameAndDurationBox} from "./styles";
import {onChangeDate, onChangeDuration, onChangeLocked, onChangeName, setStep} from "../../actions";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import Switch from "../../components/Switch/index";
import {Arrow} from "../../components/Icons/index";
import SelectDuration from "../../components/SelectDuration/index";

class NameAndDuration extends React.Component {
  componentDidMount(){
    this.props.dispatch(setStep({
      currentStep: '1',
      pageTitle: 'Set name and duration',
    }))
  }

  render() {
    const {nameOfReserv, isLocked, dispatch, startDate, duration} = this.props;
    return (
      <NameAndDurationBox>
        <Group>
          <div><GroupTitle>Name and Reserv</GroupTitle></div>
          <div>
            <Input type="text" fullWidth="fullWidth" id="nameOfReserv" placeholder="Weekend shopping" value={nameOfReserv}
                   onChange={e => dispatch(onChangeName(e.target.value))}/>
          </div>
        </Group>
        <Group>
          <div><GroupTitle>Duration</GroupTitle></div>
          <div><SelectDuration duration={duration}
                               onSelectDuration={selectedDuration => dispatch(onChangeDuration(selectedDuration))}/>
          </div>
        </Group>
        <Group>
          <div><GroupTitle>Start date</GroupTitle></div>
          <div><Input type="date" value={startDate} onChange={e => dispatch(onChangeDate(e.target.value))}/></div>
        </Group>
        <Group>
          <div/>
          <div>
            <LockedBox>
              <Switch id="loh" checked={isLocked} onChange={e => dispatch(onChangeLocked(e.target.checked))}/>
              <div className="about">
                <div className="title">Locked in?</div>
                <div className="text">
                  The merchandise is guaranteed to be there at the end! <a href="/">Learn more</a>
                </div>
              </div>
            </LockedBox></div>
        </Group>
        <Group>
          <div/>
          <div>
            <Button color="primary" as={Link} to="/shipping-address" disable={!nameOfReserv}>
              <span>Next</span>
              <Arrow/>
            </Button>
          </div>
        </Group>
      </NameAndDurationBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    nameOfReserv: state.nameOfReserv,
    isLocked: state.isLocked,
    startDate: state.startDate,
    duration: state.duration,
  }
}


export default connect(mapStateToProps)(NameAndDuration);