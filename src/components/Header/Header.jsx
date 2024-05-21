import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";



const Header = () => {
    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/donation">Donation</NavLink>
        </li>
        <li>
          <NavLink to="/statistic ">Statistic</NavLink>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown pt-16 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-15 z-[1] p-2  w-52"
              >
                {links}
              </ul>
            </div>
            <a className=" pt-12 "><img src={logo} alt="" /></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          
        </div>
      </div>
    );
      
    
};

export default Header;