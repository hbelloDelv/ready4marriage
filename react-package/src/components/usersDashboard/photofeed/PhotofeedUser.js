import React from 'react';
import Userimage from '../images/imag1.jpg'
import { Link } from 'react-router-dom'


function PhotofeedUser() {
    return (
        
            <div className="photofeedUserContent">
                <div className="photofeedUser-image">
                    <img src={Userimage} alt={"userImage"}/>
                </div>
                <div className="photofeedUser-identity">
                  <Link to="userProfile" style={{textDecoration: 'none', color: '#000'}}><span >Austine Sani</span><br /><span>Kaduna</span></Link>  
                </div>
            </div>
    )
}

export default PhotofeedUser
