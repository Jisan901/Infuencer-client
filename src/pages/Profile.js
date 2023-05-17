import Notification from "../components/Notification";
import useAuth from '../utilities/hooks/useAuth'
import axios from "axios";
import {useQuery} from "react-query";
import ChangeProfileModal from "../components/ChangeProfileModal";
import toast from "react-hot-toast";
import img from "../assets/icons/user.png"
import {Navigate} from "react-router-dom"
function Profile() {
    const {user:{email,emailVerified,photoURL},updateUser,verifyEmail} = useAuth();
    const {data:user, isLoading, refetch, isError} = useQuery(["user",email],async()=>{
        const {data} = await axios.get("/user/"+email)
        return data
    });

    if (isError) {
        return <Navigate to="/error"/>
    }
    
    return (
        <>
        {
            isLoading?
        <progress className="progress progress-info w-full mt-10"></progress>
        :<div>
        <div className="card w-full mt-20 max-w-md mx-auto bg-base-100 shadow-xl">
        <div className="w-full flex justify-end items-center">
        <label htmlFor="notification-modal" className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
        </label>
        </div>
          <div className="avatar mx-auto flex justify-center items-center relative">
          {user.verified?
            <div className="text-white badge badge-warning absolute top-0 right-0 z-10">V</div>
            :
            <></>
          }
          <div className="w-16 mask mask-squircle">
          <label htmlFor="user-credential-modal">
          
            <img src={photoURL?photoURL:img} alt="avater" referrerPolicy="no-referrer"/>
          </label>
          </div>
        </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.name}
            {user.verified?
            <div className="text-white badge badge-sm badge-info">V</div>
            :
            <></>
            }
            </h2>
            <p>{user.email}</p>
            <span className="badge badge-sm badge-primary">{user.role?user.role:"user"}</span>
            <ul className="steps my-4 w-full">
              <li className={`step step-primary`}><small>Register</small></li>
              <li onClick={()=>{
                  if(emailVerified){
                  }else{
                  verifyEmail().then(()=>{
                  toast.success("email sent on "+email+" please check your inbox or spam")})
                  }
              }} className={`step ${emailVerified?"step-primary":""}`}><small>Email verify</small></li>
              <li className="step"><small>buy/sell</small></li>
            </ul>
          <span className="my-2">complete all to get verified</span>
          </div>
        </div>
        <Notification/>
        {email&&user&&<ChangeProfileModal email={email} updateUser={updateUser} user={user} refetch={refetch}/>}
        </div>
        }
    </>)
}

export default Profile;