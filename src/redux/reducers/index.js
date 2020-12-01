import { combineReducers } from 'redux';

import {
  INCREMENT,
  DECREMENT,
  RETURN,
  CHECKING_AMOUNT,
  CANCEL_ALERT,
} from '../constants';

const initialCounter = { amount: 0, isChecking: false, hasAlert: false };

function counterReducer(state = initialCounter, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, amount: state.amount + 1, isChecking: true };
    case DECREMENT:
      return { ...state, amount: state.amount - 1, isChecking: true };
    case RETURN:
      return { ...initialCounter };
    case CANCEL_ALERT:
      return { ...state, hasAlert: false };
    case CHECKING_AMOUNT:
      if (state.amount < 0)
        return { ...state, amount: 0, isChecking: false, hasAlert: true };
      else return { ...state, isChecking: false, hasAlert: false };
    default:
      return state;
  }
}

export default combineReducers({
  COUNTER: counterReducer,
});
