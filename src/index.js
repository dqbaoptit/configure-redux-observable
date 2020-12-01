import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'rxjs';

const _store = store();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={_store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
