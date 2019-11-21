import React from 'react';
import {Link} from 'react-router-dom';


function Nav (props) {
    
    
        return (
            <nav>
                <ul>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                </ul>
            </nav>
        );
    
}

export default Nav;
