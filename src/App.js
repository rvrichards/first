import React from 'react';    // Is this needed?

import './App.css';

import Main from './components/Main/Main';
import Account from './components/Account/Account';
import Header from './components/Header/Header';
import PullLeft from './components/PullLeft/PullLeft';
import PullRight from './components/PullRight/PullRight';
import Tokens from './components/Token/Tokens';
import Side from './components/Side/Side';

function App() {
  return (
    <div className="App">
      <div className="account">Account <Account /></div>
      <div className="main"><Main /></div>
      <div className="side"> <Side /></div>
      <div className="pull-right"> <PullRight /></div>
      <div className="pull-left"> <PullLeft /></div>
      <div className="header"><Header /></div>
      <div className="token"><Tokens /></div>
    </div>
  );
}

export default App;
