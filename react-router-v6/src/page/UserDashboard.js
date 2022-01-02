import React from 'react'
import { Link } from "react-router-dom";
import "./Style.css";

const UserDashboard = () => {
    let ids=1007;
    return (
        <div className='user__dashboard'>
            <h1> User Dashboard </h1>
            <Link to="profile" className='btn'> User Profile </Link>
            <Link to={`/user/${ids}`} className='btn'> Edit Profile</Link>
        </div>
    )
}

export default UserDashboard
