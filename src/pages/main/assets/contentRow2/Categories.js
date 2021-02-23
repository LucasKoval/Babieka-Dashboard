import React from 'react';
import propTypes from 'prop-types';
import Category from '../../../../assets/Category'

function Categories() {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías en la Base de Datos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <Category name='Casual' />
                        <Category name='Fiesta' />
                        <Category name='Sale' />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Categories;