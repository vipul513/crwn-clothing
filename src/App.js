import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
    return ( 
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
         </Switch> 
      </div>
    );
}

export default App;