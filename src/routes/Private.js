import useAuth from '../utilities/hooks/useAuth'
import {useLocation, Navigate} from "react-router-dom";
import Loader from '../components/Loader'
import axios from "axios";
function Private({children}) {
    
  axios.interceptors.request.use(function (config){
    config.headers.Authorization=`Bearer ${localStorage.getItem('access_token')}`
    return config;
  }, function (error) {
    return error;
  });
  
    const {user,loading, logOut} = useAuth();
  axios.interceptors.response.use(
  response => response,
  error => {
      console.log(error);
      if (error.response.status===401) {
          
    logOut()
      }
  });

    const location = useLocation();
    if (loading) {
        return (
            <Loader />
            )
    }
    else if (user && user?.uid) {
      return (
        <>
            {children}
        </>
      );
    }
    else{
        return <Navigate to="/login" state={{form:location}} />
    }
}

export default Private;