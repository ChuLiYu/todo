import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <ul>
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>All Posts</NavLink>
                        </li>
                        <li>
                            <NavLink>Following</NavLink>
                        </li>
                        <li>
                            <NavLink>2</NavLink>
                        </li>
                        <li>
                            <NavLink>2</NavLink>
                        </li>
                    </ul>
                    <NavLink></NavLink>
                </div>
            </nav>
        </>
    )

}
