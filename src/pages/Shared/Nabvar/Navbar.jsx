import { Link, NavLink } from "react-router-dom";
import profile from "../../../assets/assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then()
    .catch()

  }
      const links = <div className="text-xl flex mt-8 text-zinc-700">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/About'}>About</NavLink></li>
      <li><NavLink to={'/Career'}>Career</NavLink></li>
      
      </div>

      return (
            <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {links}
                </ul>
              </div>
              
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
               {links}
              </ul>
            </div>
            <div className="navbar-end space-x-2 flex items-center">
            <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box w-15 p-2 ">
       <img className="mr-20" src={profile} alt="" />
      </ul>
      {
        user ? <button onClick={handleLogOut} className="btn text-2xl" >Sign Out</button> :  <Link to={'/Login'}><button className="btn text-2xl" >Login</button> </Link>
      }
             
              
            </div>
          </div>
      );
};

export default Navbar;