import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import routes from './routes/routing';

import 'isomorphic-fetch';

require('./styles.styl');

let state = {app: {}};

if (window.$REDUX_STATE) {
  state = {
    ...state,
    ...window.$REDUX_STATE
  };
}

const store = configureStore(state);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.querySelector('#app')
);
