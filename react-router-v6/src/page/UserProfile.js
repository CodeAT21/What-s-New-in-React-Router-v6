import React from 'react'
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1> User Profile</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default UserProfile
