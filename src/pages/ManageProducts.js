import Product from "../components/Home/Product";
import axios from "axios"
import {useQuery} from "react-query"
import toast from "react-hot-toast"
import { useState, useEffect } from "react";
function ManageProducts() {
    
    const {data:products,isLoading,refetch} = useQuery("productsm",async()=>{
        const {data} = await axios.get("/product")
        return data
    }
    )
    
    
    
    const deleteProduct=(id)=>{
        axios.delete("/product/"+id)
        .then(res=>{toast.success("deleted")
            refetch()
        })
        .catch(err=>{toast.error("Error")
            console.log(err);
        })
    }
    
    
    return (
        <>
        {isLoading?
        <p>Loading...</p>
        :
        
    <div className="px-2">
        <h1 className="text-3xl my-4">Manage Products</h1>
        
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product,index) => <Product key={index} product={product} actionButton={
                <button onClick={()=>{deleteProduct(product._id)}} class="btn btn-info btn-circle">
                ✕
                </button>
            }/>)
        }
        </div>
                    
    </div>
    }</>)
}

export default ManageProducts;