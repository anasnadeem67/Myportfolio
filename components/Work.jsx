'use client';
import Link from "next/link";
import { Button } from "../components/ui/button";
//import swipper react component
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from "swiper/modules";
//import swipper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules


//import swipper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from "./ProjectCard";


// import required modules


const projectData = [
    {
    image: '/work/react.png',
    category: 'react js',
    name: 'Blogging App',
    Description: 'Blogging application built entirely on React JS and seamlessly integrated with Firebase',
    link: '/',
    github: '/',
    },
    {
    image: '/work/HappyStationary.png',
    category: 'php',
    name: 'Happy Stationary',
    Description: 'e-commerce hub for all things stationary, art, and school supplies. With a curated selection and seamless shopping experience',
    link: '/',
    github: 'https://github.com/anasnadeem67/PHPprojects',
    },
    {
    image: '/work/Nationalpark.png',
    category: 'Front end | Html, Css, js',
    name: 'National Park',
    Description: 'National Park! 🌿 Explore our stunning wildlife, learn about our diverse range of animals, and conveniently purchase tickets online.',
    link: '/',
    github: 'https://github.com/anasnadeem67/Frontend-Project/tree/main/National%20Park%20Website',
    },
    {
    image: '/work/Eyeconic.png',
    category: 'Front end | Html, Css, js',
    name: 'Eyeconic',
    Description: 'E-commerce website for trendy glasses and more! Using HTML, CSS, JavaScript, and Bootstrap.',
    link: '/',
    github: 'https://github.com/anasnadeem67/Frontend-Project/tree/main/National%20Park%20Website',
    },
    {
    image: '/work/Books Liberary.png',
    category: 'Desktop Application',
    name: 'Books Library',
    Description: 'Books Library Software using C# and SQL database!',
    link: '/',
    github: '/',
    },
    {
    image: '/work/Number Choosing Game.png',
    category: 'Python Django',
    name: 'Number Guessing game',
    Description: 'Number Guessing game built using Python Django! 🎲 Test your luck and sharpen your guessing skills with this interactive game.',
    link: '/',
    github: 'https://github.com/anasnadeem67/PYTHON_projects/tree/main/Number_Guessing',
    },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
     <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">My Recent Projects.</p>
            <Link href='/projects'><Button>All projects</Button></Link>
        </div>
        {/* slides */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
            {projectData.slice(0, 6).map((project, index) => {
              return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
            })}
          </Swiper>
        </div>
     </div>
    </section>
  )
}

export default Work;
