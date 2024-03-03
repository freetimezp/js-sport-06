"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

import CustomButton from './CustomButton';

const trainerData = [
    {
        id: 1,
        image: '/assets/images/trainers/david.jpg',
        name: 'David Williams',
        role: 'Body builder coach',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit atione repellat.`,
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com' },
            { icon: FaTwitter, href: 'https://www.twitter.com' },
            { icon: FaYoutube, href: 'https://www.youtube.com' },
        ],
    },
    {
        id: 2,
        image: '/assets/images/trainers/rosy.jpg',
        name: 'Rosy Rivera',
        role: 'Body builder coach',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit atione repellat.`,
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com' },
            { icon: FaTwitter, href: 'https://www.twitter.com' },
            { icon: FaYoutube, href: 'https://www.youtube.com' },
        ],
    },
    {
        id: 3,
        image: '/assets/images/trainers/matt.jpg',
        name: 'Matt Stone',
        role: 'Body builder coach',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit atione repellat.`,
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com' },
            { icon: FaTwitter, href: 'https://www.twitter.com' },
            { icon: FaYoutube, href: 'https://www.youtube.com' },
        ],
    },
    {
        id: 4,
        image: '/assets/images/trainers/sofia.jpg',
        name: 'Sofia Lauren',
        role: 'Body builder coach',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit atione repellat.`,
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com' },
            { icon: FaTwitter, href: 'https://www.twitter.com' },
            { icon: FaYoutube, href: 'https://www.youtube.com' },
        ],
    },
];

const Team = () => {
    return (
        <section className='py-12 xl:h-[110vh]' id='team'>
            <div className="container mx-auto h-full flex flex-col items-center 
                justify-center">
                <motion.h2
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='h2 text-center mb-6'
                >
                    Our Trainers
                </motion.h2>

                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 
                    gap-12 mb-12'
                >
                    {trainerData.map((trainer) => (
                        <div
                            key={trainer.id}
                            className='flex flex-col items-center text-center'
                        >
                            <div className='relative w-[320px] h-[320px] mx-auto mb-4'>
                                <Image src={trainer.image} alt="trainer" fill />
                            </div>
                            <h4 className='h4 mb-2'>
                                {trainer.name}
                            </h4>
                            <p className='uppercase text-xs tracking-[3px] mb-2'>
                                {trainer.role}
                            </p>
                            <p className='mb-6 max-w-[320px] mx-auto'>
                                {trainer.description}
                            </p>

                            <div className='flex gap-12 justify-center'>
                                {trainer.social.map((social, index) => (
                                    <div key={index}>
                                        <Link href={social.href} className='hover:text-accent 
                                            transition-all duration-300'>
                                            <social.icon className='text-lg' />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <CustomButton
                        containerStyles='w-[196px] h-[62px]'
                        text='See all trainers'
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Team;
