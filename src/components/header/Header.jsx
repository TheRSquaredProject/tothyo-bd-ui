import React from "react";
import logo from "./rsquared_logo.png";
import "./header.css";

const Header = () => (
        <nav className="nav-container">
            <div class="nav-logo">
                <a href="./">
                    <img src={logo} alt="R-Squared Logo" class="logo"/>
                </a>
            </div>
            <div class="nav-links">
                <a href="https://rsquaredproject.org" className="nav-item">R-Squared</a>
                <a href="https://thersquaredproject.wordpress.com/" className="nav-item">Blog</a>
            </div>
	</nav>
);

export default Header;