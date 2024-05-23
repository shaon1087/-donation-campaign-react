import { Outlet } from "react-router-dom";
import Navbar from '../../components/Header/Navbar/Navbar'




const Root = () => {
    return (
      <div className="max-w-[1300px] mx-auto">
        <div className="py-4">
        <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;