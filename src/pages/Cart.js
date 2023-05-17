function Cart() {
    return (
        <div className="px-2 py-2">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-4">My cart</h1>
                <button className="btn btn-secondary btn-sm">checkout</button>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>stock-state</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                  <td>1</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Shoes!</div>
                          <div className="text-sm opacity-50">Nike</div>
                        </div>
                      </div>
                    </td>
                    <td>$1200</td>
                    <td>
                      7
                    </td>
                    <td>
                      <button className="btn btn-error btn-xs">remove</button>
                    </td>
                  </tr>
                  
                  </tbody>
              </table>
            </div>
        </div>
    )
}

export default Cart;