import { Navigate, Outlet } from "react-router-dom";

const AdminProtected = () => {
    const isAuthenticated = localStorage.getItem("admin");
    return isAuthenticated? <Outlet/> : <Navigate to= "/" />
}

export default AdminProtected;