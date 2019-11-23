import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
 
import './Nav.css';



function Nav (props) {

    return (
        <nav className='sidenav'>
            <ul>
                <li><Link to='/dashboard'><FontAwesomeIcon icon={faChartBar} /></Link></li>
                <li><Link to='/orders'><FontAwesomeIcon icon={faProjectDiagram} /></Link></li>
            </ul>
        </nav>
    );
    
}

export default Nav;
