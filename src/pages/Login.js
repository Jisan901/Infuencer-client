import {useForm} from 'react-hook-form';
import useAuth from '../utilities/hooks/useAuth';
import useAuthorize from '../utilities/hooks/useAuthorize';
import {useLocation, Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';
import useTitle from "../utilities/hooks/useTitle";
import GoogleLogin from '../components/GoogleLogin';
function Login() {
    useTitle("Login");
    const [isButton, setIsButton] = useState(true);
    const location = useLocation();
    const path = location?.state?.form?.pathname|| '/';
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {signIn} = useAuth()
    const authorize = useAuthorize();
    const onSubmit=dat=>{
        setIsButton(false)
        signIn(dat.email,dat.password)
            .then(res=>{
                toast.success("Successfully logged in.")
                console.log(res);
                authorize(res.user.accessToken)
                setIsButton(true)
                navigate(path)
            })
            .catch(err=>{
                toast.error("Something went wrong.")
                console.log(err);
                setIsButton(true)
            })
        }
    
    
    
    return (
        <div className="flex justify-center items-center w-full min-h-screen">
            <div className="max-w-sm shadow-xl p-5 rounded-xl">
                <h1 className="text-3xl font-semibold text-center my-4">Login</h1>
                <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs my-3">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input {...register('email',{ required : true })} type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control my-3 w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input {...register('password',{ required : true})} minLength='8' type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                      <label className="label">
                        <span className="label-text-alt"><Link to="/forgetpassword">Forget password?</Link></span>
                      </label>
                    </div>
                    <button disabled={!isButton} type="submit" className="btn btn-secondary w-full text-white bg-gradient-to-r from-secondary to-accent">Login</button>
                </form>
                    <span className="text-1xl my-2">Don't have an account? <Link className="text-accent" to="/signup" replace={true}>Signup</Link></span>
                <div className="divider">
                    Or
                </div>
                <GoogleLogin path={path}/>
            </div>
        </div>
    )
}

export default Login;