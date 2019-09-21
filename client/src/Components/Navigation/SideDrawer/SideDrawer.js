import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}> 
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Profile</a>
                </li>
                <li>
                    <a href="/">Resources</a>
                </li>
            </ul>
        </nav>
    );

};


export default SideDrawer;