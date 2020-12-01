import { INCREMENT, DECREMENT, RETURN, CHECKING_AMOUNT } from '../constants';

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const returnToInitial = () => {
  return { type: RETURN };
};

export const check = () => {
  return { type: CHECKING_AMOUNT };
};
