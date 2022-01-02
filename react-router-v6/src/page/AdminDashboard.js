import React from "react"
import {NavLink, Routes, Route, Outlet } from "react-router-dom"
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import "./Style.css";

const AdminDashboard = () => {
  return (
    <div className='admin__dashboard'>
      <h1> Admin Dashboard</h1>
      <ul>
        <li> <NavLink className={({ isActive }) => isActive ? "active" : ""} to="profile">Profile</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? "active" : ""} to="orders">Orders</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? "active" : ""} to="review">Review</NavLink> </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="order_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>      
      <Outlet />
    </div>
    )
}
  export const Profile = () => {
    return <h2>Profile</h2>
  }
  export const Review = () => {
    return <h2>Review</h2>
  }

export default AdminDashboard
