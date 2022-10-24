import React from 'react'; 

import './Resources.css';
import GoldIcon from './gold-icon.png';
import LogsIcon from './logs-icon.jpg';

function Resources(props) {

  return (
    <div className="resource">
       <div className="resource-row">
          <img src={LogsIcon} alt="Log icon" width="30px" className='resource-icon' />
          <div className='resource-amount'>420</div>
      </div>
      <div className="resource-row">
          <img src={GoldIcon}  alt="Gold Icon" width="30px" className='resource-icon' />
          <div className='resource-amount'>42</div>
      </div>

    </div>
  );
}


export default Resources;
