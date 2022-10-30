import React from 'react'; 

import './Tokens.css';
import GoldIcon from './Gold token.png';
import FoodIcon from './Food token.png';
import StoneIcon from './Stone token.png';

function Tokens(props) {

  return (
    <div className="token">
       <div className="token-row">
          <img src={FoodIcon} alt="Food icon" width="30px" className='token-icon' />
          <div className='token-amount'>420</div>
      </div>
      <div className="token-row">
          <img src={GoldIcon}  alt="Gold Icon" width="30px" className='token-icon' />
          <div className='token-amount'>42</div>
      </div>
      <div className="token-row">
          <img src={StoneIcon}  alt="Stone Icon" width="30px" className='token-icon' />
          <div className='token-amount'>42</div>
      </div>

    </div>
  );
}


export default Tokens;
