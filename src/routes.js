import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Store from './pages/Store';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/details" component={Details} />
      <Route path="/store" component={Store} />
    </Switch>
  );
}
