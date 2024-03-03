"use client";
import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/variants';

import CustomButton from './CustomButton';

const classes = [
    {
        id: 1,
        name: 'body building',
        img: '/assets/images/classes/bodybuilding.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Iste nisi, dolores reiciendis tempora ipsum qui.`,
    },
    {
        id: 2,
        name: 'cardio',
        img: '/assets/images/classes/cardio.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Iste nisi, dolores reiciendis tempora ipsum qui.`,
    },
    {
        id: 3,
        name: 'crossfit',
        img: '/assets/images/classes/crossfit.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Iste nisi, dolores reiciendis tempora ipsum qui.`,
    },
    {
        id: 4,
        name: 'fitness',
        img: '/assets/images/classes/fitness.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Iste nisi, dolores reiciendis tempora ipsum qui.`,
    },
];

const Classes = () => {
    return (
        <section id='class'>
            <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='grid grid-cols-1 lg:grid-cols-2'
            >
                {classes.map((item) => (
                    <div key={item.id} className='relative w-full h-[300px] lg:h-[485px]
                        flex flex-col justify-center items-center'>
                        <div className='bg-black/50 absolute w-full h-full top-0 z-10'></div>

                        <Image src={item.img} fill alt="class" className='object-cover' />

                        <div className='z-30 max-w-[380px] text-center flex flex-col 
                            items-center justify-center gap-4'>
                            <motion.h3
                                variants={fadeIn('up', 0.8)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='h3 text-accent'
                            >
                                {item.name}
                            </motion.h3>
                            <motion.p
                                variants={fadeIn('up', 1)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='text-white'
                            >
                                {item.description}
                            </motion.p>
                            <motion.div
                                variants={fadeIn('up', 1.2)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <CustomButton
                                    containerStyles='w-[164px] h-[46px]'
                                    text='Read More'
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

export default Classes;
