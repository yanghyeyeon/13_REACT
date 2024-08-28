import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";
import {Outlet} from "react-router-dom";

function Layout() {

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;