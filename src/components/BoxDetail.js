import React from "react";
import { BASE_API_USERS_URL } from '../apis/baseUrl';
import { BASE_API_PRODUCTS_URL } from '../apis/baseUrl';
import useFetch from '../apis/useFetch'
import Loader from '../assets/Loader';

function BoxDetail(props) {
    let apiUrl = props.apiUrl;
    if (apiUrl == 'products') {
        apiUrl = BASE_API_PRODUCTS_URL;
    } else if (apiUrl == 'users') {
        apiUrl = BASE_API_USERS_URL;
    } else {
        apiUrl = null;
    }
    
    const { data, loading, error } = useFetch(apiUrl, []);
    if (loading) return <Loader />;
    if (error) return "Error!";
    const lastItem = data.data.products.pop();

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" styles="width: 25rem" src={lastItem.urlImage} alt="image product" />
                    </div>
                    <p>{lastItem.model.description}</p>
                    <a target="_blank" rel="nofollow" href={lastItem.urlDetail}>Detalle</a>
                </div>
            </div>
        </div>
    );
}

export default BoxDetail;
