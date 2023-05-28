import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    let location = useLocation();
    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
    return children
};

export default PrivateRoute;