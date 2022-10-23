import React from 'react'; 

import './Resources.css';
import GoldIcon from './gold-icon.png';
import LogsIcon from './logs-icon.jpg';

function Resources(props) {

  return (
    <div>
      <div className="resource-row">
          <span className='resource-icon'><img src={GoldIcon}  width="30px" /></span>
          <span className='resource-amount'>420</span>
      </div>
      <div>
          <span className='resource-icon'> <img src={LogsIcon} width="30px"  /></span>
          <span className='resource-amount'>42</span>
      </div>
    </div>
  );
}


export default Resources;
