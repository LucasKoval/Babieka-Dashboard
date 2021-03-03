import React, { useState, useEffect } from "react";
import { BASE_API_USERS_LIST_URL } from '../../../apis/baseUrl';
import apiCall from '../../../apis/apiCall';
import UserUnit from '../../UserUnit'
import Loader from '../../../assets/Loader';
import { checkPropTypes } from "prop-types";

function UsersList() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const getPages =()=>{
        apiCall(BASE_API_USERS_LIST_URL + "?page=" + page)
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
    }

    useEffect(() => {
        getPages();
    }, []);

    useEffect(() => {
        getPages();
    }, [page]);

    if (loading) return <Loader />;
    if (error) return "Error!";

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Listado de los usuarios</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <button onClick={()=>{setPage(page - 1)}}>anterior</button>
                        <UserUnit users={data.data.users} meta={data.meta}/>
                        <button onClick={()=>{setPage(page + 1)}}>proxima</button>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default UsersList;