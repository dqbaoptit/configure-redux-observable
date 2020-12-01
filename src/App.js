import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { CANCEL_ALERT } from './redux/constants';

import { increment, decrement, returnToInitial } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  const counterState = useSelector((state) => state.COUNTER);

  const { isChecking, amount, hasAlert } = counterState;

  useEffect(() => {
    function alert() {
      if (hasAlert) {
        swal({
          title: 'Giá trị bé hơn 0, trở về giá trị 0 ban đầu',
          icon: 'error',
        }).then(() => dispatch({ type: CANCEL_ALERT }));
      }
    }
    alert();
  }, [hasAlert, dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <h3>Hello world</h3>
      <h1>Redux - Observable __ Example config</h1>
      AMOUNT : {isChecking ? <p>...is checking the value</p> : <p> {amount}</p>}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '50vw',
        }}
      >
        <button onClick={() => dispatch(returnToInitial())}>RETURN</button>
        <button onClick={() => dispatch(increment())}> INCREMENT</button>
        <button onClick={() => dispatch(decrement())}> DECREMENT</button>
      </div>
    </div>
  );
}

export default App;
