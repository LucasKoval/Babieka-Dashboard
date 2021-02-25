import React from 'react';
import SummatoryPrice from './assets/SummatoryPrice'
import Card from '../card';

function CardSection() {
    return (
        <div className="row">
            <Card title='Artículos en la base de datos' apiUrl='products' >
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </Card>
            {/* <Card title='Costo Total de Artículos' apiUrl='products' >
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
            </Card> */} 
            <SummatoryPrice />
            <Card title='Total de usuarios registrados' apiUrl='users' >
                <i className="fas fa-user-check fa-2x text-gray-300"></i>
            </Card>            
        </div>
    );
}

export default CardSection;