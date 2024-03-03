"use client";
import React, { useRef } from 'react';
import CountUp from 'react-countup';

import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

import { motion, useInView } from 'framer-motion';

const stats = [
    {
        id: 1,
        number: 19,
        icon: FaBriefcase,
        text: 'training courses',
    },
    {
        id: 2,
        number: 879,
        icon: FaClock,
        text: 'working hours',
    },
    {
        id: 3,
        number: 150,
        icon: ImUsers,
        text: 'happy customers',
    },
    {
        id: 4,
        number: 9,
        icon: FaTrophy,
        text: 'international awards',
    },
];

const statsContainerVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: 'linear',
        }
    },
};

const staticItem = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8]
        }
    }
}

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section>
            <div className="container mx-auto">
                <motion.div
                    variants={statsContainerVariant}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='grid grid-cols-2 md:grid-cols-4 gap-16'
                >
                    {stats.map((stat) => (
                        <motion.div
                            variants={staticItem}
                            className='flex flex-col justify-center items-center'
                            key={stat.id}
                        >
                            <div className='border border-accent/90 w-[140px] h-[140px] mx-auto 
                                rounded-full p-1 mb-6'>
                                <div
                                    className='border border-accent/30 w-full h-full flex 
                                    justify-center items-center text-5xl rounded-full'
                                    ref={ref}
                                >
                                    {isInView && <CountUp start={0} end={stat.number} duration={6} />}
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <stat.icon className="text-3xl mb-2" />
                                <h4 className='h4'>
                                    {stat.text}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Achievements;
