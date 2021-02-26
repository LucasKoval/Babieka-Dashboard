import React from 'react';
import PageHeading from '../../assets/PageHeading'
import CardSection from '../../components/cardSection'
import BoxSection from '../../components/boxSection'

function Main() {
    return (
        <div id="content">
            <div className="container-fluid">
                <PageHeading title='BABIEKA - Main'/>
                <CardSection />
                <BoxSection />
            </div>
        </div>
    );
}

export default Main;