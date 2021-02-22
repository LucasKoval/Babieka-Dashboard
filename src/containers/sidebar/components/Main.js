import React from 'react';
import { Link } from 'react-router-dom';

function Pages() {
    return (
        <li className="nav-item">
            <Link to="/" className="nav-link collapsed">
                <i class="fas fa-home"></i>
                <span> Main</span>
            </Link>
        </li>
    );
}

export default Pages;