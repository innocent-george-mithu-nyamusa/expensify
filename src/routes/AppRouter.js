import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './../components/Header';
import expensifyDashboardPage from './../components/dashboardPage';
import expensifyEditExpensePage from './../components/editExpensePage';
import expensifyCreateExpensePage from './../components/addExpensePage';
import expensifyHelpPage from './../components/helpPage';
import notFoundPage from './../components/notFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={expensifyDashboardPage} exact={true} />
        <Route path="/create" component={expensifyCreateExpensePage} />
        <Route path="/edit/:id" component={expensifyEditExpensePage} />
        <Route path="/help" component={expensifyHelpPage} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
