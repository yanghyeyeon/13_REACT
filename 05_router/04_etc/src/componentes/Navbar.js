import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'violet',
    }

    return(
        <div>
            <ul>
                
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined}>로그인</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;