import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../../Image/Logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const [OpenNavbar, setOpenNavbar] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleOpenNavbar() {
        setOpenNavbar(!OpenNavbar);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={scrollPosition > 500 ? 'greenBg' : 'redBg'}>
            <img src={logo} alt="" />
            <ul>
                <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
                    <li>
                        Home
                    </li>
                </ScrollLink>
                <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
                    <li>
                    About
                    </li>
                </ScrollLink>
                <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
                    <li>
                    Service
                    </li>
                </ScrollLink>
                <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
                    <li>
                    Contact Us
                    </li>
                </ScrollLink>
            </ul>
            <div className="menuBox" onClick={handleOpenNavbar}>
                {OpenNavbar ? <IoClose /> : <FiMenu />}
            </div>
            <ul className={`respNavbar ${OpenNavbar ? 'open' : ''}`}>
            <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
                    <li>
                        Home
                    </li>
                </ScrollLink>
                <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
                    <li>
                    About
                    </li>
                </ScrollLink>
                <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
                    <li>
                    Service
                    </li>
                </ScrollLink>
                <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
                    <li>
                    Contact Us
                    </li>
                </ScrollLink>
            </ul>
        </nav>
    );
}

export default Navbar;
