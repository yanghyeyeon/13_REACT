import Header from '../components/Header'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

function Layout() {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            {/* Outlet : 바뀔부분 */}
        </>
    )
}

export default Layout;