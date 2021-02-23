import React from 'react';
import PageHeading from './pageContent/PageHeading'
import ContentRow1 from './pageContent/ContentRow1'
import ContentRow2 from './pageContent/ContentRow2'

function Main() {
    return (
        <div id="content">
            <div className="container-fluid">
                <PageHeading />
                <ContentRow1 />
                <ContentRow2 />
            </div>
        </div>
    );
}

export default Main;