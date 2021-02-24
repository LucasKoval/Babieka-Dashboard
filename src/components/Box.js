import React, { useState, useEffect } from "react";
import { BASE_API_USERS_URL } from '../apis/baseUrl';
import { BASE_API_PRODUCTS_URL } from '../apis/baseUrl';
import apiCall from '../apis/apiCall';
import Category from './Block'

function Block() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiCall(BASE_API_PRODUCTS_URL)
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías en la Base de Datos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <Category name='Card' />
                        <Category name='Card' />
                        <Category name='Card' />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Block;