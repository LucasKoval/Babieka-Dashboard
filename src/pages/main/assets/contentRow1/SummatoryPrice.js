import React, { useState, useEffect } from "react";
import apiCall from '../../../../../../apis/apiCall';
import { BASE_API_PRODUCTS_URL } from '../../../../../../apis/baseUrl';

function SummatoryPrice() {

    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(0);
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
    
    useEffect(() => {
        if (!data) {
            return
        }
        const amount = data.data.products.reduce((acum, current) => {
            return acum += Number(current.price)
        }, 0);
        setAmount(amount) 
    }, [data]);

    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Costo Total de Artículos</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                $ {amount}
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummatoryPrice;