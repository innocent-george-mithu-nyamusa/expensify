import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const expenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

//The first callBack parameter can be empty if you have nothing you need to take
//from the redux store
export default expenseListItem;
