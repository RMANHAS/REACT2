import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Teacher() {
  return (
    <div>
      <h1> this is teacher page page </h1>
      <Link to="/user/1">Users1</Link> &nbsp;&nbsp;
      <Link to="/user/2">Users2</Link> &nbsp;&nbsp;
      <Link to="/user/3">Users3</Link>
      <h2>
        here we start nested routing
      </h2>
     
      <Outlet/>
    </div>
  );
}