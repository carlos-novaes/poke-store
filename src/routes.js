import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Store from './pages/Store';
import Header from './components/Header';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Header>
        <Route path="/cart" component={Cart} />
        <Route path="/store/:type" component={Store} />
        <Route path="/details/:id" component={Details} />
      </Header>
    </Switch>
  );
}
