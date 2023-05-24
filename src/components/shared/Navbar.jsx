import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
    <NavLink className={({isActive}) => isActive ? "bg-orange-400 p-2 rounded" : ""} to="/">Home</NavLink>
    <NavLink className={({isActive}) => isActive ? "bg-orange-400 p-2 rounded" : ""} to="/contact-us">Contact Us</NavLink>
    <NavLink className={({isActive}) => isActive ? "bg-orange-400 p-2 rounded" : ""} to="/dashboard">Dashboard</NavLink>
    <NavLink className={({isActive}) => isActive ? "bg-orange-400 p-2 rounded" : ""} to="/our-menu">Our Menu</NavLink>
    <NavLink className={({isActive}) => isActive ? "bg-orange-400 p-2 rounded" : ""} to="/order-food">Order Food</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 items-center">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Navbar;