import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="container mx-auto bg-blue-800 text-center py-3">
      <h2 className="text-2xl font-bold mb-2">This is Header</h2>
      <nav className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
