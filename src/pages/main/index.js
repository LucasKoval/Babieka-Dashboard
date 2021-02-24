import React from 'react';
import PageHeading from '../../assets/PageHeading'
import CardSection from '../../components/cardSection'
import BlockSection from '../../components/blockSection'

function Main() {
    return (
        <div id="content">
            <div className="container-fluid">
                <PageHeading title='BABIEKA - Main'/>
                <CardSection />
                <BlockSection />
            </div>
        </div>
    );
}

export default Main;