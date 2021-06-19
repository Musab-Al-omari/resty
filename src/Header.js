import React from 'react';
  
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1>REST</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/resty">Home</Link>
                    </li>
                    <li>
                        <Link to="/resty/history">History</Link>
                    </li>
                    <li>
                        <Link to="/resty/about-us">Help</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}
export default  Header;