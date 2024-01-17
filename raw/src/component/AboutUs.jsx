import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
      <h1>this is for all About</h1>
      <Link to='/student'>Student</Link>&nbsp; &nbsp;
      <Link to='/teacher'>Teacher</Link>
      <Outlet/>  
{/* 
      in this whole page( link to from outlet ) is used to nested router dom
      if we miss the outlet then we will not enter the student/teacher .outlet us important for nested router dom */}
      </div>
  )
}
