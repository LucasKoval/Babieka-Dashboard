import React from 'react';
import { Link } from 'react-router-dom';

function Charts() {
    return (
        <li className="nav-item">
            <Link to="/products" className="nav-link">
                <i class="fas fa-shopping-bag"></i>
                <span> Products</span>
            </Link>
        </li>
    );
}

export default Charts;