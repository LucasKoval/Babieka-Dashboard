import React from 'react';
import propTypes from 'prop-types';
import Divider from './components/Divider';
import Brand from './components/Brand';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import Products from './components/Products';
import Users from './components/Users';

function Sidebar() {
    return (
        
        <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion" id="accordionSidebar">
            <Brand />
            <Divider />
            <Dashboard />   {/* Nav-Item */}
            <Divider />
            {/* <div className="sidebar-heading">Actions</div> */}   {/* Heading */}
            <Main />   {/* Nav-Item */}
            <Products />   {/* Nav-Item */}
            <Users />   {/* Nav-Item */}
            <hr className="sidebar-divider d-none d-md-block"/>   {/* Divider */}
        </ul>
    );
}

export default Sidebar;