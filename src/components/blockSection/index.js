import React from 'react';
import LastProduct from './assets/LastProduct'
import Categories from './assets/Categories'
import UserList from './assets/UsersList'

function BlockSection() {
    return (
        <div className="row">
            <LastProduct />
            <Categories />
            <UserList />
        </div>
    );
}

    

export default BlockSection;