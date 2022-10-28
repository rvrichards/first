import React from 'react'; 

import './Resources.css';
import GoldIcon from './Gold token.png';
import FoodIcon from './Food token.png';
import StoneIcon from './Stone token.png';

function Resources(props) {

  return (
    <div className="resource">
       <div className="resource-row">
          <img src={FoodIcon} alt="Food icon" width="30px" className='resource-icon' />
          <div className='resource-amount'>420</div>
      </div>
      <div className="resource-row">
          <img src={GoldIcon}  alt="Gold Icon" width="30px" className='resource-icon' />
          <div className='resource-amount'>42</div>
      </div>
      <div className="resource-row">
          <img src={StoneIcon}  alt="Stone Icon" width="30px" className='resource-icon' />
          <div className='resource-amount'>42</div>
      </div>

    </div>
  );
}


export default Resources;
