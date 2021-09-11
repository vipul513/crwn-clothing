import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';

const HatsPage = () => {
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>)
}

function App() {
    return ( 
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/hats' component={HatsPage}  />
         </Switch> 
      </div>
    );
}

export default App;