import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UserCard from '../../components/cards/userCard';
import ProductCard from '../../components/cards/productCard';
import CashCard from '../../components/cards/cashCard';
import Box from '../../components/boxes/Box'
import LastProductBox from '../../components/boxes/LastProductBox'
import Block from '../../components/boxes/Block'
import ListBox from '../../components/boxes/listBox';
import UsersListBox from '../../components/boxes/UsersListBox';
import LastUserBox from '../../components/boxes/LastUserBox'


function Users() {
    
    
    
    return (
        <div id="content">
            <div className="container-fluid">
                
                <PageHeading title='BABIEKA - Users'/>
                
                <div className="row">   {/*---- CARD SECTION ----*/}
                    <UserCard title='Total de usuarios registrados' apiUrl='users' />
                    <UserCard title='Total de Roles en Sistema' apiUrl='users' />
                    <UserCard title='Total de usuarios registrados' apiUrl='users' />
                </div>
                
                <div className="row">   {/*---- BOX SECTION ----*/}
                    <UsersListBox title='Listado de usuarios' apiUrl='usersList'/>
                </div>

            </div>
        </div>
    );
}

export default Users;