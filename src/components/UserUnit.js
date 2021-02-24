import React from 'react';

function Category(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="justify-content-space-between card bg-danger text-white shadow">
                <div className="card-body">
                    {props.name}
                    <span className="card-body">
                        {props.role}
                    </span>
                </div>
            </div>
        </div> 
    );
}

export default Category;