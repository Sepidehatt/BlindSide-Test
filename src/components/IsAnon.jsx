import { Navigate } from "react-router-dom";

const IsAnon = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")

  if (isAuthenticated === "true") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsAnon