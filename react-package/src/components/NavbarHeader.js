import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/img/logo.png'
import { FaBars } from 'react-icons/fa';

function NavbarHeader() {
  const [open, setOpen] = useState(false);
    return (
        <>
          <nav>
              <div className="nav-brand">
                <Link to="/" className="navbar-brand image-width"><img src={logo} style={{paddingLeft: "48px"}}/></Link>
              </div>
              <div className="nav-item"  style={{transform: open ? "translateX(0px)" : ""}}>
                <ul>
                  <li><Link to="/login" >Login</Link></li>
                </ul>
              </div>
              <div>
                <i onClick={() => setOpen(!open)}  className="burgar"><FaBars /></i>
              </div>
          </nav>
          </>

    )
}

export default NavbarHeader
