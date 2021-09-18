import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Activity from './activity/Activity';
import Encounter from './encounters/Wrapper'
import logo from './images/logo.png';
import userProfileImage from './images/imag1.jpg'
import { FaBars} from 'react-icons/fa'
import { MdExpandMore } from 'react-icons/md'


function UserDashboardHeader() {

    const [toggleUserBar, settoggleUserBar] = useState(false)

    return (
           <div className="userHeader">
               <div className="logo">
                   Logo
               </div>
               <div className="userNav" style={{transform: toggleUserBar? "translateX(0px)" : ""}}>
                <ul>
                    <li><Link>Search</Link></li>
                    <li><Link to="/messages">Messages</Link></li>
                    <li><Link to="encounters">Encounters</Link></li>
                    <li><Link to="/activity">Activity</Link></li>
                </ul>
                <ul>
                    <li className="upgrade-link"><Link>Upgrade</Link></li>
                    <li><Link>Balance</Link></li>
                    <li><Link>Credits</Link></li>
                    <li>
                        <Link>
                             <img src={userProfileImage} alt={"user-profile-image"} className="userProfileImage-two"/>
                            <span><MdExpandMore className="usermoreIcon"/></span> 
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <i onClick={() => settoggleUserBar(!toggleUserBar)} className="fa fa-bars burgar"></i> */}
            <i onClick={() => settoggleUserBar(!toggleUserBar)}className="burgar"><  FaBars /></i>
           </div>


        
    )
}


export default UserDashboardHeader
