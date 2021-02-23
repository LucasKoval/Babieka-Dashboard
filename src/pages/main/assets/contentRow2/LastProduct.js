import React, { useState, useEffect } from "react";
import apiCall from '../../../../../../apis/apiCall';
import { BASE_API_PRODUCTS_URL } from '../../../../../../apis/baseUrl';

function LastProduct() {

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

    const lastProduct = data.data.products.pop();
    console.log(`ULTIMO PRODUCTO:${lastProduct}`);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Artículo Cargado</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" styles="width: 25rem" src={lastProduct.urlImage} alt="image product" />
                    </div>
                    <p>{lastProduct.model.description}</p>
                    <a target="_blank" rel="nofollow" href={lastProduct.urlDetail}>Detalle</a>
                </div>
            </div>
        </div>
    );
}

export default LastProduct;
