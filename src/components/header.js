import React from 'react';

const Header = ({ basics }) => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-sm-push-3">
          <h1>{basics.name}</h1>
          <h2>{basics.label}</h2>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
