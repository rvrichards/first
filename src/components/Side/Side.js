import React from 'react'; 

import './Side.css';


function Side(props) {
    const clickLands = () => {
        console.log("Clicked Lands.");
    };
    function clickVillager() {
        console.log("Clicked on Villager.");
    };


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
                <li onClick={clickVillager}>Villager</li>
                <li>Craft</li>
                <li onClick={clickLands}>Lands</li>
            </ul>
        </div>
        
        ); 
    }

export default Side;