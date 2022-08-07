import { Navigate } from "react-router-dom";

const IsPrivate = ({ children } ) => {

const isAuthenticated = localStorage.getItem("isAuthenticated")

  if ( isAuthenticated !== "true") {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
}

export default IsPrivate