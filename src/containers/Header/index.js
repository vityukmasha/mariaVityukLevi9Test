import React from 'react';
import { connect } from 'react-redux';
import {HeaderBox} from "./styles";
import {KeyboardArrow} from "../../components/Icons/index";

function Header({pageTitle}) {
  return <HeaderBox><span>Create a RESERV</span><KeyboardArrow /><span>{pageTitle}</span></HeaderBox>
}

function mapStateToProps(state) {
  return {
    pageTitle: state.pageTitle,
  }
}

export default connect(mapStateToProps)(Header);