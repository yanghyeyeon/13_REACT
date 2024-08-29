import { useSearchParams } from "react-router-dom";
import { searchMenu } from "../api/MenuAPI";
import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import boxStyle from './Menu.module.css'

function MenuSearchResult() {

    // useSearchParam을 이용해 쿼리스트링으로 전달받은 값을 꺼낼 수 있다.
    const [searchParam] = useSearchParams();

    // console.log(searchParam.get('menuName'));
    const searchMenuName = searchParam.get('menuName');

    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            // 검색어를 기준으로 데이터에서 찾아오기
            setMenuList(searchMenu(searchMenuName))
        }, []
    )

    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;