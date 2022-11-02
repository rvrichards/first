import React from 'react'; 

import './Side.css';


function Side(props) {
    return (
        <div className="sidebar">
            <div className="side-button"> 
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="side-list">
                <li>Mine</li>
                <li>NFTs</li>
                <li>Villager</li>
                <li>Craft</li>
                <li>Lands</li>
            </ul>
        </div>
        
        ); 
    }

export default Side;