import React from "react";
import './MobileNavigator.css';
import Logo from './images/logon.png'

const MobileNavigator = () => {
    return(
        <div className="mainMobileNavigator">
            <div>
                <img className="mobileNavigatorLogo"src={Logo} />
            </div>
            <nav>
                <ul>
                    <li className="mobileNavList">Home</li>
                    <li className="mobileNavList">About</li>
                    <li className="mobileNavList">Projects</li>
                    <li className="mobileNavList">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavigator
