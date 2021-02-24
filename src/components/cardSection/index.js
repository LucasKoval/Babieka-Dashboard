import React from 'react';
import AmountProducts from './assets/AmountProducts'
import SummatoryPrice from './assets/SummatoryPrice'
import AmountUsers from './assets/AmountUsers'

function CardSection() {
    return (
        <div className="row">
            <AmountProducts />
            <SummatoryPrice />
            <AmountUsers />
        </div>
    );
}

export default CardSection;