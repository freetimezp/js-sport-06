"use client";
import React from 'react';
import Image from 'next/image';

import { FaQuoteLeft } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const testimonialData = [
    {
        id: 1,
        img: '/assets/images/testimonial/lucy.jpg',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi aliquid reprehenderit ipsam quod deserunt earum.`,
        name: 'Lucy Anthony'
    },
    {
        id: 2,
        img: '/assets/images/testimonial/maria.jpg',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi aliquid reprehenderit ipsam quod deserunt earum.`,
        name: 'Maria Carmen'
    },
    {
        id: 3,
        img: '/assets/images/testimonial/michael.jpg',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi aliquid reprehenderit ipsam quod deserunt earum.`,
        name: 'Michael Tram'
    },
    {
        id: 4,
        img: '/assets/images/testimonial/lucy.jpg',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi aliquid reprehenderit ipsam quod deserunt earum.`,
        name: 'Lucy Anthony'
    },
    {
        id: 5,
        img: '/assets/images/testimonial/maria.jpg',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi aliquid reprehenderit ipsam quod deserunt earum.`,
        name: 'Maria Carmen'
    },
    {
        id: 6,
        img: '/assets/images/testimonial/michael.jpg',
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi aliquid reprehenderit ipsam quod deserunt earum.`,
        name: 'Michael Tram'
    },
];

const Testimonial = () => {
    return (
        <section className='py-12 xl:py-28' id='testimonial'>
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className='h2 text-center'
                >
                    Our Testimonials
                </motion.h2>
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }}
                        className='h-[320px]'
                    >
                        {testimonialData.map((person) => (
                            <SwiperSlide
                                key={person.id}
                                className='h-full'
                            >
                                <div className='flex flex-col justify-center items-center gap-4
                                    text-center h-full'>
                                    <Image
                                        src={person.img}
                                        alt="person"
                                        width={90}
                                        height={90}
                                        className='rounded-full border-2 border-accent'
                                    />
                                    <div className='flex flex-col justify-center items-center'>
                                        <FaQuoteLeft className='text-2xl text-gray-300' />
                                        <p className='max-w-[380px] mb-4'>
                                            {person.message}
                                        </p>
                                        <span className='text-2xl text-accent'>
                                            {person.name}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonial;
