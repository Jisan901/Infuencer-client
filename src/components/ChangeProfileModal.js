import toast from "react-hot-toast";
function ChangeProfileModal({refetch,user,updateUser,email}) {
    
    function handleSubmit(e){
        e.preventDefault()
        toast.success("this feature is unavailable!!!")
    }
    
    return (
<>
<input type="checkbox" id="user-credential-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="user-credential-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Edit name and profile photo</h3>
    <form onSubmit={handleSubmit} className="w-full mx-auto">
        <input type="text" className="input input-bordered w-full" placeHolder={user.name}/>
        <input type="file" className="file-input file-input-bordered w-full mt-4"/>
        <button className="btn btn-info mx-auto mt-4" type="submit">Update</button>
    </form>
  </div>
</div>
</>
    )
}

export default ChangeProfileModal;