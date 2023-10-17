import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
    {
        path: '/news',
        title: 'News'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
]
const Navber = () => {

    return (
        <nav className='flex items-center justify-between container mx-auto'>
            <h1>Test Next JS</h1>
           <ul className='flex justify-center items-center'>
            {
                navLinks.map(({path , title} , index) => <li className='mr-4' key={index}>
                    <NavLink exact={path === "/"} activeClassName="text-2xl" href={path}>{title}</NavLink>
                </li>)
            }
           </ul>
        </nav>
    );
};

export default Navber;