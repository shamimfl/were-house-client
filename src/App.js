import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Component/AddItem/AddItem';
import Allinventory from './Component/Allinventory/Allinventory';
import Blogs from './Component/Blogs/Blogs';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Manage from './Component/Manage/Manage';
import MyAccount from './Component/MyAccount/MyAccount';
import Myitem from './Component/Myitem/Myitem';
import Notfound from './Component/Notfound/Notfound';
import RequireAuth from './Component/ReqireAuth/RequireAuth';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import Singup from './Component/Singup/Singup';

function App() {
  return (
    <div className="app font-serif">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/singup' element={<Singup></Singup>}></Route>
      <Route path='/myaccount' element={<RequireAuth>
        <MyAccount></MyAccount>
      </RequireAuth>}></Route>
      <Route path='/myitem' element={<Myitem></Myitem>}></Route>
      <Route path='/reset' element={<ResetPassword></ResetPassword>} />
      <Route path='/allinventory' element={<Allinventory></Allinventory>}></Route>
      <Route path='/additem' element={<AddItem></AddItem>}></Route>
      <Route path='/inventory/:_id' element={<RequireAuth>
        <Manage></Manage>
      </RequireAuth>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
