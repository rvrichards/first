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
                    <MenuItem title="Middle One"/>
                    <MenuItem title="Middle One"/>
                    <MenuItem title="Middle One"/>
                    <MenuItem title="Penultimate"/>
                    <MenuItem title="Last One"/>
                </div>

            </div>
        </div>
        );
    }


export default Main;
