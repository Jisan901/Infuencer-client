import Product from './Product'
import axios from "axios"
import {useQuery} from "react-query"
function Popular() {
    
        const {data:products=[]} = useQuery(["products","home"],async()=>{
        const {data} = await axios.get('/product?limit=9&page=1')
        return data;
        
        })
    return (
    <div className="max-w-[1000px] mx-auto my-20">
        <h2 className="text-3xl font-semibold text-center">Popular collection</h2>
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product,idx)=><Product key={idx} product={product}/>)
        }
        </div>
        <div className="w-full mt-10 flex justify-end">
            <a href="/" className="btn btn-sm btn btn-ghost rounded-full text-pink-500 md:btn-md gap-2 normal-case lg:gap-3">
              <div className="flex flex-col items-end">
              <span>See more</span>
              </div> 
              <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
              </a>
        </div>
    </div>
    )
}

export default Popular;