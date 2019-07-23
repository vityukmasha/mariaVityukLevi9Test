import {
  ON_CHANGE_ACCOUNT, ON_CHANGE_DATE, ON_CHANGE_DURATION, ON_CHANGE_LOCKED, ON_CHANGE_NAME,
  ON_CHANGE_SHIPPING, SET_STEP
} from "./constants";

export function onChangeName(name) {
  return {
    type: ON_CHANGE_NAME,
    name,
  }
}

export function onChangeLocked(isLocked) {
  return {
    type: ON_CHANGE_LOCKED,
    isLocked,
  }
}

export function onChangeDate(startDate) {
  return {
    type: ON_CHANGE_DATE,
    startDate,
  }
}

export function onChangeDuration(duration) {
  return {
    type: ON_CHANGE_DURATION,
    duration,
  }
}

export function onChangeShipping(shippingAddress) {
  return {
    type: ON_CHANGE_SHIPPING,
    shippingAddress,
  }
}

export function onChangeAccount(selectedAccount) {
  return {
    type: ON_CHANGE_ACCOUNT,
    selectedAccount,
  }
}

export function setStep(step) {
  return {
    type: SET_STEP,
    step,
  }
}