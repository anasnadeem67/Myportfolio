
import Image from 'next/image';
import DevImg from './DevImg';


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    Briefcase,
    Calendar,
    GraduationCap,
    HomeIcon,
    MailIcon,
    PhoneCall,
    User2
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Anas Nadeem',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+92 3142285926',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'anasnadeem193@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 7 October, 2002',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Undergraduate Student of BS Computer Science',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Nazimabad, Karachi, PK',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Usman Institute of Technology',
                qualification: 'Bachelor of Computer Scienece',
                years: '2023 - 2027',
            },
            {
                university: 'Aptech North Nazimabad',
                qualification: 'Computer Software Engineer',
                years: '2020 - 2023',
            },
            {
                university: 'IDM Pakistan',
                qualification: 'Digital Marketer',
                years: '2023 - 2024',
            },
            {
                university: 'Piaic',
                qualification: 'Genrative Ai & Blockchain Developer',
                years: '2023 - present',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'EssayShark',
                role: 'Software Engineer',
                years: '2023 - present',
            },
            {
                company: 'Upwork',
                role: 'php Developer',
                years: '2023 - present',
            },
            {
                company: 'fiverr',
                role: 'php Developer',
                years: '2023 - Present',
            },
        ]
    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS, JAVASCRIPT, REACT.JS, NEXT.JS',
            },
            {
                name: 'PHP DEVELOPER',
            },
            {
                name: 'SEO EXPERT',
            },
            {
                name: 'DEGETAL MARKETER',
            },
            {
                name: 'PYTHON DEVELOPER',
            },
            {
                name: 'React & Next js DEVELOPER',
            },
            {
                name: 'BLOCKCHAIN & AI DEVELOPER',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ]
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item)=> item.title === title);
    }


  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            About me
            </h2>
      <div className='flex flex-col xl:flex-row'>
      {/* image */}
      <div className='flex flex-1 relative'>
        <DevImg
        containerStyles='w-[505px] h-[505px]
        bg-no-repeat relative'
        imgSrc='/about/developer.png'
        />
      </div>
      {/* tabs */}
      <div className='flex-1'>
        <Tabs defaultValue='personal'>
            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualification</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
            </TabsList>
            {/* tabs content */}
            <diV className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                    <div className='text-center xl:text-left'>
                        <h3 className='h3 mb-4'>Unmatched Service Quality for Over 3 Years</h3>
                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology.</p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                       {infoData.map((item, index) => {
                        return (
                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                        );
                       })} 
                      </div>
                      {/* Languages */}
                      <div className='flex flex-col gap-y-2'>
                        <div className='text-primary'>Language Skill</div>
                        <div className='.border-b border-border'></div>
                        <div>English, Urdu, Arabic</div>
                      </div>
                    </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value='qualifications'>
                    <div>
                        <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey
                        </h3>
                        {/* experience & education wrapper */}
                        <div className='grid md:grid-cols-2 gap-y-8'>
                        {/* experience */}
                        <div className='flex flex-col gap-y-6'>
                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                <Briefcase />
                                <h4 className='capitalize font-medium'>
                                    {getData(qualificationData, 'experience').title}
                                </h4>
                            </div>
                            {/* List */}
                            <div className='flex flex-col gap-y-8'>
                                {getData(qualificationData, 'experience').data.map((item, index)=> {
                                    const {company, role, years} = item;
                                    return (
                                        <div className='flex gap-x-8 group' key={index}>
                           <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                           <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] transition-all duration-500 group-hover:translate-y-[84px]'></div>
                           </div>
                           <div>
                          <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                          <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                          <div className='text-base font-medium'>{years}</div>
                         </div>
                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        {/* education */}
                        <div className='flex flex-col gap-y-6'>
                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                <GraduationCap size={28} />
                                <h4 className='capitalize font-medium'>
                                    {getData(qualificationData, 'education').title}
                                </h4>
                            </div>
                            {/* List */}
                            <div className='flex flex-col gap-y-8'>
                                {getData(qualificationData, 'education').data.map((item, index)=> {
                                    const {university, qualification, years} = item;
                                    return (
                                        <div className='flex gap-x-8 group' key={index}
                                        >
                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                <div className='w-[11px] h-[11px] rounded-full
                                                bg-primary absolute -left-[5px]
                                                group-hover:translate-y-[84px] transition-all
                                                duration-500'></div>
                                            </div>
                                            
                                            <div>
                                                <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                <div className='text-base font-medium'>{years}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                    <div className='text-center xl:text-left'>
                        <h3 className='h3 mb-8'>What I Use Everyday</h3>
                        {/* skill */}

                        <div className='mb-16'>
                            <h2 className='text-xl font-semibold mb-2'>Skills</h2>
                            <div className='border-b border-border mb-4'></div>
                            {/* Skill List */}
                            <div>
                                {getData(skillData, 'skills').data.map(
                                    (item, index)=> {
                                        const {name} = item;
                                    return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                        <div className='font-medium'>{name}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                        {/* tools */}
                        <div>
                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                        <div className='border-b border-border mb-4'></div>
                        {/* tools list */}
                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                         const { imgPath } = item;
                         return (
                         <div key={index}>
                         <Image
                         src={imgPath}
                         width={48}
                         height={48}
                         alt=''
                         priority
                        />
                        </div>
                        );
                      })}
                        </div>
                    </div>
                    </div>
                </TabsContent>
            </diV>
        </Tabs>
      </div>
        </div>
      </div>
    </section>
  )
}

export default About
