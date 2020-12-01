// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './reducers';

// import { createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './epics/index';

// const epicMiddleware = createEpicMiddleware();

// export default function configStore() {
//   const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(epicMiddleware))
//   );
//   epicMiddleware.run(rootEpic);
//   return store;
// }

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import { rootEpic } from './epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
