'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

//import swipper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

// Import Font Awesome
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'trekproductions',
        job: 'Php Developer',
        review: 'Anas Nadeem is a wonderful person to work with! I have been doing tech work now for 20+ years and Anas solved a problem that I couldnt! I would highly recommend Anas for any work that you need done',
        rating: 5
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Olivia',
        job: 'Computer game using java',
        review: 'Great communication, Fast responses, Follows instructions, Fast delivery, Well explained task',
        rating: 5
    },
]

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            {/* slider */}
            <Swiper
            slidesPerView={1}
            breakpoints={{
                640: {slidesPerView: 2},
                1400: {slidesPerView: 3},
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            className='h-[350px]'
            >
                {reviewsData.map((person, index) => {
                    return (
                    <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                               <div className='flex items-center gap-x-4'>
                                {/* image */}
                                <Image src={person.avatar} width={70} height={70} alt='' priority/>
                                {/* name */}
                                <div className='flex flex-col'>
                                    <CardTitle>{person.name}</CardTitle>
                                    <p>{person.job}</p>
                                </div>
                               </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>
                                {person.review}
                                <div className='flex items-center mt-2'>
                                    {[...Array(person.rating)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className='text-yellow-500' />
                                    ))}
                                </div>
                            </CardDescription>
                        </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews
