"use client";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';

const links = [
    { id: 1, name: 'home', target: 'home', offset: -100 },
    { id: 2, name: 'about', target: 'about', offset: -80 },
    { id: 3, name: 'class', target: 'class', offset: -80 },
    { id: 4, name: 'team', target: 'team', offset: 0 },
    { id: 5, name: 'prices', target: 'membership', offset: -40 },
    { id: 6, name: 'testimonial', target: 'testimonial', offset: 0 },
    { id: 7, name: 'blog', target: 'blog', offset: 0 },
    { id: 8, name: 'contact', target: 'contact', offset: 0 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)',
    });

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link) => (
                <ScrollLink
                    key={link.id}
                    to={link.target}
                    offset={link.offset}
                    smooth
                    spy
                    activeClass={`${!isMobile && 'active'}`}
                    className='cursor-pointer hover:text-accent transition-all'
                >
                    {link.name}
                </ScrollLink>
            ))}
        </nav>
    );
}

export default MobileNav;
