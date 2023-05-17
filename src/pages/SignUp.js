import {useForm} from 'react-hook-form';
import useAuth from '../utilities/hooks/useAuth';
import useAuthorize from '../utilities/hooks/useAuthorize';
import {useLocation, useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';
import useTitle from "../utilities/hooks/useTitle";
import GoogleLogin from '../components/GoogleLogin';
function SignUp() {
    useTitle("SignUp");
    const [isButton, setIsButton] = useState(true);
    const location = useLocation();
    const path = location?.state?.form?.pathname|| '/';
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const authorize = useAuthorize()
    const {createUser,updateUser,signIn} = useAuth();
    
    // creating callback hill
    
    const onSubmit=dat=>{
        setIsButton(false)
        createUser(dat.email,dat.password)
        .then(res => {
            updateUser(res.user,{
                displayName:dat.name
            })
            .then(res2=>{
                toast.success("successfully user created");
                setIsButton(true)
                console.log("res2",res2);
                signIn(dat.email,dat.password)
                .then(res3=>{
                authorize(res3.user.accessToken)
                })
                navigate(path)
            })
            .catch(err=>{
                toast.error("N:something went wrong.");
                console.log("err:n",err);
                setIsButton(true)
            });
            console.log("res",res);
        })
        .catch(err=>{
            console.log("err:f",err);
            toast.error("F:something went wrong.");
            setIsButton(true)
        });
    };
    
    return (
        <div className="flex justify-center items-center w-full min-h-screen">
            <div className="max-w-sm shadow-xl p-5 rounded-xl">
                <h1 className="text-3xl font-semibold text-center my-4">Sign up</h1>
                <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs my-3">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input {...register('name',{ required : true })} type="text" placeholder="Enter your Name" className="input input-bordered w-full max-w-xs" />
                    </div>
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
                    </div>
                    <button disabled={!isButton} type="submit" className="btn btn-secondary w-full text-white bg-gradient-to-r from-secondary to-accent">Sign up</button>
                </form>
                    <span className="text-1xl my-2">Already have an account? <Link className="text-accent" to="/login" replace={true}>Login</Link></span>
                <div className="divider">
                    Or
                </div>
                <GoogleLogin path={path}/>
            </div>
        </div>

    )
}

export default SignUp;