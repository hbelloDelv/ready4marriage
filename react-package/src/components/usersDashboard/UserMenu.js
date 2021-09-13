import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

function UserMenu() {
    return (
        <div className="usersNavWrapper">
            <div className="brand-logo">
                <Link to="/"><img src={logo} alt={"dashboardlogo"} /></Link>
            </div>
            <div className="main-navbar">
                <ul>
                    <li><button>Search</button></li>
                    <li><Link>Messages</Link></li>
                    <li><Link>Encounters</Link></li>
                    <li><Link to="/activity">Activity</Link></li>
                </ul>
            </div>
            <div className="extra-navbar">
                <ul>
                    <li><Link>Upgrade</Link></li>
                    <li><Link>Balance</Link></li>
                    <li><Link>Credits</Link></li>
                </ul>
            </div>
            <div className="userMenu-style">
               <Link to="/userProfile"><h5>User</h5></Link> 
            </div>
        </div>
    )
}

export default UserMenu
