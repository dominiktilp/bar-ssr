import { createStore, applyMiddleware } from 'redux';
import combinedReducers from '../reducers';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  const finalCreateStore = applyMiddleware(thunk)(createStore);
  const store = finalCreateStore(
    combinedReducers,
    initialState,
    typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
