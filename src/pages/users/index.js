import React from 'react';
import PageHeading from '../../assets/PageHeading'
import UserCard from '../../components/cards/userCard';
import ProductCard from '../../components/cards/productCard';
import CashCard from '../../components/cards/cashCard';
import Box from '../../components/boxes/Box'
import DetailBox from '../../components/boxes/DetailBox'
import Block from '../../components/boxes/Block'
import ListBox from '../../components/boxes/listBox';

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
                    <ListBox title='listado usuarios' apiUrl='usersList'/>
                </div>

            </div>
        </div>
    );
}

export default Users;