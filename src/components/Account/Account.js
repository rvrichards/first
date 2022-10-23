import React from 'react'; 

import './Account.css';
import WaxImage from './wax-orange.jpg';
import AccountImage from './account-icon.png';


function Account(props) {

    return (
        <div id="account-menu">
            <ul className="account-list">
                <li><img src={AccountImage} width="30" />qwerty.waa</li>
                <li><img src={WaxImage} width="30" />1234567</li>
            </ul>
        </div>
        
        );
    }


export default Account;
