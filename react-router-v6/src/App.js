import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./page/Home";
import About from "./page/About";
import UserDashboard from "./page/UserDashboard";
import UserProfile from "./page/UserProfile";
import UserEditProfile from "./page/UserEditProfile";
import AdminDashboard from "./page/AdminDashboard";
import RouteAsObj from "./page/RouteAsObj";
import Search from "./page/Search";

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Approach #1 */}
        <Route path="/user">
          <Route index element={<UserDashboard />} />
           <Route path="profile" element={<UserProfile />} />
           <Route path=":editId" element={<UserEditProfile />} /> 
        </Route>
        
        {/* Approach #2 */}
        <Route path="admin/*" element={<AdminDashboard  />} />
        <Route path="object_route/*" element={<RouteAsObj  />} />

        <Route path="search" element={<Search  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export const NotFound = () => {
  return <div><h1> This is a 404 page </h1> </div>
}

export default App;
