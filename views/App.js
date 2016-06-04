import React, { PropTypes } from 'react';

import Header from '../components/Header.js';

function App(props) {

  return (
    <div className="container">
      <Header />
      {props.main}
    </div>
  );

}

App.propTypes = {
  main: PropTypes.element
};

export default App;
