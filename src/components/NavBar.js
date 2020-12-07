import React from 'react';
import {NavLink,Link,} from 'react-router-dom';

import './LandingPage.scss'
import Logo from '../img/DETECTor.svg'

const NavBar = () => {
    // const [visible,setVisible] = useState(false);

   
    
    return (
        <div className="container-fluid wrapper">
            <div className="row">
                <nav className="nav_bar col-sm-12 pr-0"  >
                    <Link className="brand" to="/">
                        <img src={Logo} alt="" className="brand_logo" />
                    </Link>
                    <div className="toggler" >
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
                    <div className="navbar_items" >
                        <ul className="navigation">
                            <li className="navigation_item" >
                               <NavLink exact
                                    to="/face"
                                    activeStyle={{
                                    fontWeight: "bold",
                                    color: "#fd3a69"
                                }}
                               >Face Detect</NavLink>
                            </li>
                            <li className="navigation_item">
                                <NavLink exact
                                    to="/vehicle"
                                    activeStyle={{
                                    fontWeight: "bold",
                                    color: "#fd3a69"
                                }}
                                >Vehicle Detect</NavLink>
                            </li>
                            <li className="navigation_item">
                                <NavLink exact
                                    to="/demo"
                                    activeStyle={{
                                    fontWeight: "bold",
                                    color: "#fd3a69"
                                }}
                                >DemoGraphics Detect</NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
            </div>
            
        </div>
    );
};

export default NavBar;