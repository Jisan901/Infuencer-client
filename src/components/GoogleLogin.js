import useAuth from '../utilities/hooks/useAuth';
import useAuthorize from '../utilities/hooks/useAuthorize';
import toast from 'react-hot-toast';
import { useNavigate} from "react-router-dom";
import svg from "../assets/icons/google.svg"


function GoogleLogin({path}) {
    
    const {signInGoogle,signInFb} = useAuth();
    const navigate = useNavigate();
    const authorize = useAuthorize();
    
    return (
        <div className="w-full flex justify-evenly items-center">
            <button onClick={()=>{
                signInGoogle()
                    .then((res)=>{
                        toast.success("successfully logged in")
                        console.log(res);
                        authorize(res.user.accessToken)
                        navigate(path)
                    })
                    .catch(err=> {
                        toast.error("Something went wrong.");
                        console.log(err);
                    });
            }} className="btn btn-ghost btn-circle"><img src={svg} alt="google" /></button>
            <button onClick={()=>{
                signInFb()
                    .then((res)=>{
                        toast.success("successfully logged in")
                        authorize(res.user.accessToken)
                        navigate(path)
                    })
                    .catch(err=> {
                        toast.error("Something went wrong.");
                    });
            }} className="btn btn-ghost text-white bg-blue-600 btn-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></button>
        </div>
    )
}

export default GoogleLogin;