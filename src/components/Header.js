'use client'


import React, { useEffect, useState } from 'react'

import { Link } from 'react-scroll'

import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const navLinks = [
        {
            link: "Home",
            path: "home"
        },
        {
            link: "About",
            path: "about"
        },
        {
            link: "Skills",
            path: "skills"
        },
        {
            link: "Projects",
            path: "projects"
        },
        {
          link: "Contact",
          path: "contact"
      },
        
    ]

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };
        
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header  className={`w-full fixed top-0 px-4 z-20 transition-colors duration-300 ${scrollPosition > 0 ? 'bg-white text-black' : 'bg-transparent text-white'} `}>
            <nav className='flex justify-between items-center py-4 '>
                <Link href="/" className='flex items-center space-x-2'>
                    <p className='text-4xl font-bold uppercase text-primary'>Portfolio</p>
                </Link>

                <ul className='md:flex space-x-6 hidden'>
                    {navLinks.map(({link,path}) => (
                        <Link to={path} spy={true} smooth={true} key={path} offset={-100} className='cursor-pointer nav-menu'>{link}</Link>
                    ))}
                </ul>


                <div className='md:hidden '>
                    <button onClick={handleMenu}>
                        {isMenuOpen ? <FaXmark className='w-6 h-6 '/> : <FaBars className='w-6 h-6'/> }
                    </button>   
                </div>

                <div className={`space-y-4 px-4 mt-16 py-7 ${isMenuOpen ? "block fixed top-0 left-0 right-0 bg-primary text-white" : "hidden"}`}>
                    {navLinks.map(({link,path}) => (
                        <Link onClick={handleMenu} to={path} spy={true} smooth={true} key={path} offset={-100} className='block  cursor-pointer '>{link}</Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header
