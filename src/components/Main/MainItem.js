import React from 'react'; 

import './MainItem.css';
import Villager from './Villager2.png';

function MainItem(props) {

  return (
    <div className="main-item">
      <div className="main-image-title">{props.title}</div>
      <div className="main-image"><img src={Villager} alt="{Villager}" /></div>   
      <div className="main-button-line"><button className="main-button" >Select</button></div>
    </div>
  );
}


export default MainItem;
