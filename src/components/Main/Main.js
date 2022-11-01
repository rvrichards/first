import React from 'react'; 
import MenuItem from "./MainItem";


import './Main.css';


function Main(props) {

    return (
        <div>
            <div className="main-title">Villager</div>
            <div className="main-scroll"> 
                <div className="main-container">
                    <MenuItem title="First One"/>
                    <MenuItem title="Middle One"/>
                    <MenuItem title="Last One"/>
                    <MenuItem title="New Line1"/>
                    {/* <MenuItem title="New Line2"/>
                    <MenuItem title="New Line3"/>
                    <MenuItem title="New Line4"/> */}
                </div>

            </div>
        </div>
        );
    }


export default Main;
