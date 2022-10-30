import React from 'react'; 

import './MenuItem.css';
import Tractor from './Villager.png';

function MenuItem(props) {

  return (
    <div className="main-menu-item">
      <h3>{props.title}</h3>
      <img src={Tractor}  alt="Villager Tractor"  className='main-menu-item-icon' /> 
      <div className="main-menu-item2">
        <button className="button2">MINE</button>
      </div>
    </div>
  );
}


export default MenuItem;
