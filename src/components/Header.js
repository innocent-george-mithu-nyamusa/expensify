import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Homepage
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
  </Header>
);

export default Header;
