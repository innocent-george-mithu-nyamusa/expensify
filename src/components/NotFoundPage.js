import React from 'react';
import {Link} from 'react-router-dom';

const notFoundPage = () => (
  <div>
    <p>Page Not found 404</p>
    <Link to='/'>Dashbord</Link>
  </div>
);

export default notFoundPage;
