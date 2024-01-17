import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        {/* this will refesh the whole web page so we cant include or use this process beside this we will use the link to  */}
        <a href='/'>Home</a> &nbsp; &nbsp;
        <a href='/about'>Aboutus</a> &nbsp;&nbsp;
        <a href='/contact'>Contact</a>
        <hr/>
{/* here we use the link to,this will not refresh the whole page */}
        <Link to='/'>Home</Link> &nbsp; &nbsp;
        <Link to='/about'>Aboutus</Link > &nbsp;&nbsp;
        <Link to='/contact'>Contact</Link> &nbsp;&nbsp;
        <Link to='/users'>Users</Link> &nbsp;&nbsp;
        <Link to='/search'>search</Link>
    </div>
  )
}

export default NavBar