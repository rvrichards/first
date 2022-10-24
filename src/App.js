import React from 'react';    // Is this needed?

import './App.css';

import Main from './components/Main/Main';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import PullLeft from './components/PullLeft/PullLeft';
import PullRight from './components/PullRight/PullRight';
import Resources from './components/Resources/Resources';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="account">Account <Account /></div>
      <div className="main"><Main /></div>
      <div className="menu"> <Menu /></div>
      <div className="pull-right"> <PullRight /></div>
      <div className="pull-left"> <PullLeft /></div>
      <div className="header"><Header /></div>
      <div className="resources"><Resources /></div>
    </div>
  );
}

export default App;
