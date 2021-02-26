import React from 'react';

function UserUnit({users, meta}) {
    
    const listUsers = users.map((user) =>{
        return <li>{user.first_name + " "+ user.last_name}</li>
    });

    return (
        <div className="col-lg-6 mb-4">
            <div className="justify-content-space-between card bg-danger text-white shadow">
                <div className="card-body">
                    <ul> 
                       {listUsers}
                    </ul>
                </div>
            </div>
        </div> 
    );
}

export default UserUnit;