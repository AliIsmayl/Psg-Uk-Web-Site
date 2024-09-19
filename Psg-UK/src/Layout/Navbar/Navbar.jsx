import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../../Image/Logo.png'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [OpenNavbar, setOpenNavbar] = useState(false)
    function handleOpenNavbar() {
        setOpenNavbar(!OpenNavbar)
    }
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact Us</li>
            </ul>
            <div className="menuBox" onClick={handleOpenNavbar}>
                {
                    OpenNavbar ? <IoClose /> : <FiMenu />
                }
            </div>
            <ul className={`respNavbar ${OpenNavbar ?"open":""}`}>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar