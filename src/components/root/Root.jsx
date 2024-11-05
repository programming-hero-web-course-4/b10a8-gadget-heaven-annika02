import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;