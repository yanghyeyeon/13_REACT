import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layouts/Layout";
import Main from './pages/Main';
import Menu from './pages/Menu';
import About from './pages/About';
import MenuDetails from './pages/MenuDetails';
import MenuSearchResult from './pages/MenuSearchResult';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='main' element={<Main/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='menu'>
              <Route index element={<Menu/>}/>
              {/* :menuCode = pathVariable를 사용해 값 전달 */}
              <Route path=":menuCode" element={<MenuDetails/>}/>
              {/* 쿼리스트링을 사용해 값을 전달 */}
              <Route path='search' element={<MenuSearchResult/>}/>
            </Route>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;