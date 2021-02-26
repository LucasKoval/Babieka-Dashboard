import React from "react";
import Title from './assets/Title';
import Value from './assets/Value';
import Icon from './assets/Icon';

function Card(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-danger shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <Title title={ props.title } />
                            <Value apiUrl={ props.apiUrl } />
                        </div>
                        <Icon>
                            { props.children }
                        </Icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;