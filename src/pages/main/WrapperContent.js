import React from 'react';
import Main from './content/Main'
import Footer from '../../containers/footer/Footer'
import Header from '../../containers/header/Header'
/* import Sidebar from '../../containers/sidebar/Sidebar' */

function WrapperContent() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <Header />
            <Main />
            <Footer />
        </div>
    );

    
}

export default WrapperContent;