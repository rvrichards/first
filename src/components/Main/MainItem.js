import React from 'react'; 

import './MainItem.css';
import Villager from './Villager2.png';

function MainItem(props) {

  return (
    <div className="main-item">
      <h3>{props.title}</h3>
      <img src={Villager}  className="main-image" main-alt="Villager Image" />   
      <button className="button2" >Deal</button>
    </div>
  );
}


export default MainItem;
