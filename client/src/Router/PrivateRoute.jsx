import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = () => {
  const location = useLocation();

  // if (loading) {
  //     return <Loading />;
  //   }

  // if (user) {
  //     return children;
  //   }

  // console.log("location in private route = ", location);
  // return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
