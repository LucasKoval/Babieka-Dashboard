import React, { useState, useEffect } from "react";
import { BASE_API_USERS_URL } from '../../../apis/baseUrl';
import apiCall from '../../../apis/apiCall';
import Loader from '../../../assets/Loader';


function AmountUsers() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiCall(BASE_API_USERS_URL)
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
        <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de usuarios registrados</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{data.meta.count}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmountUsers;