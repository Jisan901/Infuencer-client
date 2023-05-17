import axios from "axios";
import { useEffect } from "react";
function Dashboard() {
    useEffect(() => {
        async function fetchData(){
        const {data} = await axios.get("/user");
        console.log(data);}
        fetchData()
        
    }, []);
    return (
        <div className="px-2 py-2">
            <h1 className="text-3xl my-4">Orders History</h1>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Date</th>
                    <th>Code</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                
                  <tr>
                    <th>1</th>
                    <td>1eXpcV7TC7h</td>
                    <td>10/20/2022</td>
                    <td>Code</td>
                    <td><button className="btn btn-info btn-sm">Details</button></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>1eXpcV7TC7h</td>
                    <td>10/20/2022</td>
                    <td>Code</td>
                    <td><button className="btn btn-info btn-sm">Details</button></td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>1eXpcV7TC7h</td>
                    <td>10/20/2022</td>
                    <td>Code</td>
                    <td><button className="btn btn-info btn-sm">Details</button></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default Dashboard;