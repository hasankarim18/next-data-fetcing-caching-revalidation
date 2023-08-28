import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost normal-case text-xl">Next Data Feching </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li>Dropdown</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default NavBar;