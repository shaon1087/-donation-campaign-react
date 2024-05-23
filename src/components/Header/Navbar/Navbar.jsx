import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-6 px-5">
                <div>
                    <Logo></Logo>
                </div>
                <ul className="flex gap-5">
                    <li className="text-lg font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="text-lg font-bold">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-red-700 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li className="text-lg font-bold">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-lg font-bold text-red-700 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}; 

export default Navbar;