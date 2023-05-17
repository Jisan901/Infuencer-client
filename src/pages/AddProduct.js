import { useState } from "react";
import {toast} from "react-hot-toast"
import axios from "axios";
function AddProduct() {
    const [url, setUrl] = useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const desc = form.desc.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const file = form.banner;
        
        const formData = new FormData();
        formData.append("image", file.files[0])
        fetch("https://api.imgbb.com/1/upload?key=43e324f69dce9fa6786a2e6506d0acda",{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data?.url)
            console.log(data);
            axios.post("/product",{
                name,
                desc,
                price,
                phone,
                url:data.data.url
            })
            .then(data1=>{
                toast.success('product added')
            })
            toast.success("image uploaded")
        })}
    return (
        <div className="w-full px-4 py-3 mt-5">
        <h2 className="text-3xl my-2">Add product</h2>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto shadow shadow-lg rounded rounded-md p-2">
                <input type="text" name="name" className="input input-bordered mx-auto w-full my-2" placeholder="Product Name" />
                <input type="text" name="desc" className="input input-bordered mx-auto w-full my-2" placeholder="Product description" />
                <input type="number" name="price" className="input input-bordered mx-auto w-full" placeholder="Product price" />
                <input type="tel" name="phone" className="input input-bordered mx-auto w-full my-2" placeholder="seller phone" />
                <input type="file" name="banner" className="file-input file-input-bordered mx-auto w-full" />
                <button className="btn btn-info mx-auto text-white my-2" type="submit">Add</button>
            </form>
            <div >
                {url&&<img src={url} className="rounded rounded-sm h-4 w-4" alt="productimg" />}
            </div>
        </div>
    )
}

export default AddProduct;