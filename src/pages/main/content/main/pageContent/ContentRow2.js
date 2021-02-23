import React from 'react';
import propTypes from 'prop-types';
import LastProduct from './contentRow2/LastProduct'
import Categories from './contentRow2/Categories'
import UserList from './contentRow2/UsersList'

function ContentRow2() {
    return (
        <div className="row">
            <LastProduct />
            <Categories />
            <UserList />
        </div>
    );
}

    

export default ContentRow2;