import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-[#222831] text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Task
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="view">View </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
