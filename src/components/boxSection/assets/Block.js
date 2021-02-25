import React from 'react';

function Block(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="justify-content-space-between card bg-danger text-white shadow">
                <div className="card-body d-flex justify-content-between">
                    <span>{props.name}</span>
                    <span>{props.productsByCategory}</span>
                </div>
            </div>
        </div> 
    );
}

export default Block;