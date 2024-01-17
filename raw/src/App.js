
import './App.css';
import Home from './component/Home';
import AboutUs from './component/AboutUs'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Contact from './component/Contact';
// import PageNotFound from './component/PageNotFound';
import NavBar from './component/NavBar';
import Student from './component/Student';
import Teacher from './component/Teacher';
import Users from './component/Users';

import Search from './component/Search';
import Detailuser from './component/Detailuser';


function App() {
  return (
    <div className="App">
     
       <h1>
        Hello To Me
       </h1>
       <hr/>
      
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/search" element = {<Search/>}/>
        <Route path='/about/' element = {< AboutUs/>}/>
        <Route path='/contact' element = {< Contact/>}/>
        {/* <Route path='*' element = {< PageNotFound/>}/> */}
        <Route path = "/student" element = {<Student/>}/>
        <Route path = "/teacher" element = {<Teacher/>}/>


        {/* dynamic routing */}
        <Route path = '/users' element = {<Users/>}/>

          {/* nested dynamic routing */}
          {/* <Route path = "users/1" element = {<UserDetails/>}/>
          <Route path = "users/2" element = {<UserDetails/>}/>
          <Route path = "users/3" element = {<UserDetails/>}/> */}
        <Route path = 'user/:id' element = {<Detailuser/>}/>
        <Route path = '/user' element = {<Detailuser/>}/>
       </Routes>
       </BrowserRouter>
      
      
    </div>
  );
}

export default App;
