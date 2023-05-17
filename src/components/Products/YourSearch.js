import Product from "../Home/Product";
import axios from "axios"
import { useState, useEffect } from "react";
function YourSearch() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData=()=>{
        setCount(current=>current+1)
        axios.get(`/product?limit=6&page=${count}`)
        .then(data=>{
            console.log(data);
            setProducts([...products,...data.data])
            if (data.data.length<1) {
                setHasMore(false)
            }
        })
        .catch(err=>console.error(err))
        
    }
    useEffect(() => {
        fetchMoreData()
    },[]);
    
    return (
        <div>
            <h1 className="my-4 mt-6 text-3xl font-semibold">Products found for "shoes"</h1>
            <div id="newid" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-auto ">
            
                {products.map((product,index) => <Product key={index} product={product}/>)
                }
            </div>
                    {hasMore&&<div className="w-full mt-10 flex justify-end">
                    <button onClick={fetchMoreData} className="btn btn-sm btn btn-ghost rounded-full text-pink-500 md:btn-md gap-2 normal-case lg:gap-3">
                      <div className="flex flex-col items-end">
                      <span>See more</span>
                      </div> 
                      <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
                      </button>
                </div>}
        </div>
    )
}

export default YourSearch;