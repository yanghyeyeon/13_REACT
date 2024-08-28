import {NavLink,Link} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'violet',
        color : 'white',
    }

    return(
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive? activeStyle: undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle: undefined}>메뉴목록</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;