'use client';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

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
    category: 'Php',
    name: 'Happy Stationary',
    Description: 'e-commerce hub for all things stationary, art, and school supplies. With a curated selection and seamless shopping experience',
    link: '/',
    github: 'https://github.com/anasnadeem67/PHPprojects',
  },
  {
    image: '/work/Nationalpark.png',
    category: 'Html, Css, js',
    name: 'National Park',
    Description: 'National Park! 🌿 Explore our stunning wildlife, learn about our diverse range of animals, and conveniently purchase tickets online.',
    link: '/',
    github: 'https://github.com/anasnadeem67/Frontend-Project/tree/main/National%20Park%20Website',
  },
  {
    image: '/work/Eyeconic.png',
    category: 'Html, Css, js',
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
    github: '',
  },
  {
    image: '/work/Number Choosing Game.png',
    category: 'Python Django',
    name: 'Number Guessing game',
    Description: 'Number Guessing game built using Python Django! 🎲 Test your luck and sharpen your guessing skills with this interactive game.',
    link: '/',
    github: 'https://github.com/anasnadeem67/PYTHON_projects/tree/main/Number_Guessing',
  },
  // Rest of the project data
];

const uniqueCategories = [
  'all projects',
   ...new Set(projectData.map((item) => item.category))
]

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setcategory] = useState('all projects');



    const filteredProjects = projectData.filter((project) => {
      return category === 'all projects' ? project : project.category === category;
    }); 


    return (
      <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
          {/* tabs */}
          <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
            mb-12 mx-auto md:border dark:border-none'>
              {categories.map((category, index)=> {
                return ( 
                <TabsTrigger
                onClick={()=> setcategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {filteredProjects.map((project, index)=> {
                return <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              })}
            </div>
          </Tabs>
        </div>
      </section>
    );
};

export default Projects;
