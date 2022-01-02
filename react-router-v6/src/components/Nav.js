import { NavLink, Outlet } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__container'>
        {/* Approach #1 --- Active  */}
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>

        {/* Approach #2 --- Active  */}
        <NavLink style={({ isActive }) => {
          return { 
            color: isActive ? "#ffe500" : ""
          };
        }} to="/about">About</NavLink>

        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/user">User Dashboard</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/admin">Admin Dashboard</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/object_route"> Route as Object </NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/search"> Search </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
