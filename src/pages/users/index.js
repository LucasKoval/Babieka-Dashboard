import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UsersList from '../../components/blockSection/assets/UsersList';
import Box from '../../components/box/Box'



function Users() {
    
    return (
        <div id="content">
            <div className="container-fluid">
                <PageHeading title='BABIEKA - Users'/>
                <UsersList/>
                <Box title='Listado de usuarios'/>


                
            </div>
        </div>
    );
}

export default Users;