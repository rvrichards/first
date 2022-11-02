import React from 'react'; 

import './MainItem.css';
import Villager from './Villager2.png';

function MainItem(props) {

  return (
    <div className="main-item">
      <div className="main-image-title">{props.title}</div>
      <img src={Villager}  className="main-image" alt="{Villager}" />   
      <div className="main-buttonline"><button className="main-button" >Deal</button></div>
    </div>
  );
}


export default MainItem;
