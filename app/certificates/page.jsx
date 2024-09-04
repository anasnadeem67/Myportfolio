'use client';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

// Array of certificate data
const Mycertificate = [
  {
    image: '/work/DigitalMarketing.jpg',
    category: 'Marketing',
    name: 'DIGITAL MARKETER',
    Description: 'I completed this digital marketing course in 8 months from IDMPakistan.',
    link: '/',
    github: '/',
  },
  // Additional project entries...
];

// Extract unique categories
const uniqueCategories = ['all projects', ...new Set(Mycertificate.map((item) => item.category))];

const Certificates = () => {
  // State for categories and selected category
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  // Filter certificates based on the selected category
  const filteredCertificates = Mycertificate.filter((project) => {
    // If 'all projects' is selected, return all certificates, otherwise filter by category
    return category === 'all projects' ? true : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Certificates</h2>
        {/* Tabs for category selection */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredCertificates.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Certificates;
