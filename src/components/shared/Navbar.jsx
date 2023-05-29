import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../contextAPI/AuthContext";

const Navbar = () => {
  const { user, logOut } = useGlobalContext();

  const handleSingOut = () => {
    logOut().then((res) => console.log("logout"));
    // localStorage.removeItem('userEmail')
  };

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 p-2 rounded"
            : "hover:border-b-2 p-1 border-orange-500 transition-all"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 p-2 rounded"
            : "hover:border-b-2 p-1 border-orange-500 transition-all"
        }
        to="/contact-us"
      >
        Contact Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 p-2 rounded"
            : "hover:border-b-2 p-1 border-orange-500 transition-all"
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 p-2 rounded"
            : "hover:border-b-2 p-1 border-orange-500 transition-all"
        }
        to="/our-menu"
      >
        Our Menu
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-400 p-2 rounded"
            : "hover:border-b-2 p-1 border-orange-500 transition-all"
        }
        to="/order-food"
      >
        Order Food
      </NavLink>
      {user ? (
        <NavLink
          className="bg-transparent hover:border-b-2 p-1 border-orange-500 transition-all" onClick={handleSingOut}
        >
          Log Out
        </NavLink>
      ) : (
        <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-400 p-2 rounded"
                  : "hover:border-b-2 p-1 border-orange-500 transition-all"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "bg-orange-400 p-2 rounded"
                  : "hover:border-b-2 p-1 border-orange-500 transition-all"
              }
            >
              Register
            </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-black bg-opacity-20 fixed z-10 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-4 shadow rounded-box w-52 text-white"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl block">
          Bistro Boss <br />{" "}
          <span className="tracking-widest font-normal opacity-75">
            Restaurant
          </span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 items-center text-white">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <NavLink to="/userdetails">
            <img
              className="h-14 w-14 rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
              title={user?.displayName}
            />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
