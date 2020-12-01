import { combineEpics } from 'redux-observable';
import { CHECKING_AMOUNT, DECREMENT, INCREMENT } from '../constants';
import { filter, mapTo, delay } from 'rxjs/operators';

const decrementEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === DECREMENT),
    delay(2000),
    mapTo({ type: CHECKING_AMOUNT })
  );

const incrementEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === INCREMENT),
    delay(2000),
    mapTo({ type: CHECKING_AMOUNT })
  );

export const rootEpic = combineEpics(decrementEpic, incrementEpic);
