import React from 'react'; 

import './Menu.css';


function Menu(props) {
    return (
        <div class="sidebar">
            <div className="menu-button"> 
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu-list">
                <li>Mine</li>
                <li>NFTs</li>
                <li>Villager</li>
                <li>Craft</li>
                <li>Lands</li>
            </ul>
        </div>
        
        );
    }

export default Menu;