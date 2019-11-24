import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
 
import './Nav.css';



function Nav (props) {

    return (
        <nav className='sidenav'>
            <ul>
                <li><NavLink to='/dashboard' activeClassName='sidenav_active'><FontAwesomeIcon icon={faChartBar} /></NavLink></li>
                <li><NavLink to='/devices' activeClassName='sidenav_active'><FontAwesomeIcon icon={faProjectDiagram} /></NavLink></li>
            </ul>
        </nav>
    );
    
}

export default Nav;
