import React, { useState, useEffect } from "react";
import { BASE_API_PRODUCTS_URL } from '../../../apis/baseUrl';
import apiCall from '../../../apis/apiCall';
import Block from '../../Block'
import Loader from '../../../assets/Loader';

function Categories() {

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

    if (loading) return <Loader />;
    if (error) return "Error!";

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías en la Base de Datos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <Block name='Casual' productsByCategory={data.meta.count_Category_Casual}/>
                        <Block name='Fiesta' productsByCategory={data.meta.count_Category_Fiesta}/>
                        <Block name='Sale' productsByCategory={data.meta.count_Category_Sale}/>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Categories;