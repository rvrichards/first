import React from 'react';    // Is this needed?

import './App.css';

import Main from './components/Main/Main';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import Resources from './components/Resources/Resources';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="account">Account <Account /> </div>
      <div className="main"><Main /></div>
      <div className="menu"> <Menu /> </div>
      <div className="header"><Header />  </div>
      <div className="resources">Resources <Resources /> </div>
      <div className="empty"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
