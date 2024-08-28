import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layouts/Layout";
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Error from './pages/Error';

function App() {
  return (
    <>
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='main' element={<Main/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='mypage' element={<MyPage/>}/>
            {/* 404 에러와 관련된 페이지 추가 */}
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    </>
  );
}

export default App;
