import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Users() {
  return (
    <div>
      <h1> this is user page </h1>
      <Link to="/user">Users1</Link> &nbsp;&nbsp;
      <Link to="users/2">Users2</Link> &nbsp;&nbsp;
      <Link to="users/3">Users3</Link>
      <Outlet/>
    </div>
  );
}
