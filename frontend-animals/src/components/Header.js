import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
            <div className="Header">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/help">How to Help</Link>
                        </li>
                    </ul>
                </div>
    );
}

export default Header;

