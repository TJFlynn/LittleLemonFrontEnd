import React from "react";
import {Link } from "react-router-dom";


const Nav = () => {
    const navLinks = ["Home", "About", "Menu", "Book", "Reservations"];
    return (
        <nav id="navigation">
            <ul>
                {navLinks.map(url => (
                    <li className="links" key={url}> 
                        <Link to={url}>{url} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;