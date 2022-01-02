import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import "./Style.css";

const UserEditProfile = () => {
  let params = useParams();
  let navigate = useNavigate();
    
  const handleClick =()=> {
     navigate('/user/profile');
  };

  return (
    <div>
      <h1> Edit Profile </h1>
      <p> <b> Profile Id </b> : {params.editId} </p>
      <button onClick={handleClick} className='btn__button'> useNavigate Instead of useHistory </button>
    </div>
  )
}

export default UserEditProfile
