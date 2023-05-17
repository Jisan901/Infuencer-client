import {useQuery} from "react-query";
import axios from "axios";
import img from "../assets/icons/user.png"
import toast from "react-hot-toast"
function Users() {
    
    const {data:users,isLoading,refetch} = useQuery("users",async()=>{
        const {data} = await axios.get("/user");
        return data;
    })
    
    
    const deleteUser = (email)=>{
        axios.delete("/user/"+email)
        .then(res=>{toast.success("requested")
            refetch()
        })
        .catch(err=>toast.error("Error"))
    }
    
    return (
        <>
        {
        isLoading?
        <progress className="progress progress-info w-full mt-10"></progress>
        :
        <div className="px-2 py-2">
            <h1 className="text-3xl my-4">Users Management</h1>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
        
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Admin</th>
                    <th>Seller</th>
                    <th>Name</th>
                    <th>type</th>
                    <th>uid</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
            
                  
                  {users.map((user,idx)=>{return (
                  <tr key={idx}>
                    <td>{idx+1}</td>
                    <th>
                        <input type="checkbox" className="toggle toggle-info toggle-sm" checked={user.role==="Admin"} onChange={(e)=>{
                            axios.patch("/user/role",{
                                email:user.email,
                                type:user.role==="Admin"?"User":"Admin"
                            })
                            .then(data=>{
                                console.log(data?.data);
                            })
                            refetch()
                        }}/>
                    </th>
                    <th>
                        <input type="checkbox" className="toggle toggle-error toggle-sm" checked={user.role==="Seller"} onChange={(e)=>{
                            axios.patch("/user/role",{
                                email:user.email,
                                type:user.role==="Seller"?"User":"Seller"
                            })
                            .then(data=>{
                                console.log(data?.data);
                            })
                               refetch() 
                        }}/>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={user.photo||img} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm opacity-50">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user.verified?"verified":"not verified"}
                    </td>
                    <td>{user.uid}</td>
                    <th>
                      <button onClick={()=>{deleteUser(user.email)}} className="btn btn-error btn-xs">delete</button>
                    </th>
                  </tr>)}
                  )}
                </tbody>
              </table>
            </div>
        </div>
    }
    </>
    )
}

export default Users;