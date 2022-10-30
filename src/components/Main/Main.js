import React from 'react'; 
import MenuItem from "./MenuItem";


import './Main.css';


function Main(props) {

    return (
        <div className="main-container"> 
            <MenuItem title="First One"/>
            <MenuItem title="Middle One"/>
            <MenuItem title="Last One"/>
            <MenuItem title="New Line"/>
        </div>
        );
    }


export default Main;
