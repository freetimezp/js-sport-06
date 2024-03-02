"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MdMenu } from 'react-icons/md';

import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${headerActive ? 'h-[100px]' : 'h-[124px] '} bg-primary-200
            fixed max-w-[1920px] top-0 w-full  transition-all duration-300 z-50`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                <Link href={"/"}>
                    <Image src={"/assets/images/logo.png"} alt="logo" width={117} height={55} />
                </Link>

                <MobileNav containerStyles={`
                    ${headerActive
                        ? 'top-[100px]'
                        : 'top-[124px]'} 
                    ${openNav
                        ? 'max-h-max pt-8 pb-10 border-t border-white/10'
                        : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
                    flex 
                    flex-col text-center gap-8 text-white xl:hidden transition-all duration-300
                    fixed bg-primary-200 w-full left-0 text-base uppercase font-medium`
                } />

                <Nav containerStyles='flex gap-4 hidden text-base uppercase text-white xl:flex
                    transition-all duration-300' />

                <div className='flex items-center gap-4'>
                    <div className='text-white flex items-center gap-4'>
                        <button className='hover:text-accent transition-all duration-300
                            text-base uppercase font-medium'>
                            Login
                        </button>
                        <button className='hover:text-accent transition-all duration-300
                            text-base uppercase font-medium'>
                            Register
                        </button>
                    </div>
                    <button className='text-white xl:hidden' onClick={() => setOpenNav(!openNav)}>
                        <MdMenu className='text-4xl' />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
