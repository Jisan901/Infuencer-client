import useAuth from '../utilities/hooks/useAuth'
import {Link} from 'react-router-dom';
function Navbar({open}) {
    const {user} = useAuth();
    const navItems = <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      {user && user.uid?
        <li><Link to="/dashboard/profile">Dashboard</Link></li>
      :
        <li><Link to="/login">Login</Link></li>
      }
    </>
    return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      {open?
          <label htmlFor={open} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        :
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        }
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-lg">InfluencerProducts</Link>
  </div>
  <div className="navbar-end flex">
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      {navItems}
    </ul>
    <Link to="/products" className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </Link>
    <Link to="/dashboard/cart" className="btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    </Link>
  </div>
</div>
    )
}

export default Navbar;