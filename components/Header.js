import React from 'react';

import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Bar SSR</Link>
    </div>
  );
};

export default Header;
