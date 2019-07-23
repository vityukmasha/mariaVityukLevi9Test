import {
  ON_CHANGE_ACCOUNT, ON_CHANGE_DATE, ON_CHANGE_DURATION, ON_CHANGE_LOCKED, ON_CHANGE_NAME,
  ON_CHANGE_SHIPPING, SET_STEP
} from "./constants";

const today = new Date();

const initialState = {
  currentStep: 1,
  pageTitle: '',
  nameOfReserv: '',
  duration: '4week',
  startDate: today.toISOString().substr(0, 10),
  isLocked: true,
  shippingAddress: '1',
  selectedAccount: '1',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_NAME:
      return {
        ...state,
        nameOfReserv: action.name,
      };
    case ON_CHANGE_LOCKED:
      return {
        ...state,
        isLocked: action.isLocked,
      };
    case ON_CHANGE_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case ON_CHANGE_DURATION:
      return {
        ...state,
        duration: action.duration,
      };
    case ON_CHANGE_SHIPPING:
    return {
      ...state,
      shippingAddress: action.shippingAddress,
    };
    case ON_CHANGE_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.selectedAccount,
      };
    case SET_STEP:
      return {
        ...state,
        currentStep: action.step.currentStep,
        pageTitle: action.step.pageTitle,
      };
    default:
      return state
  }
}