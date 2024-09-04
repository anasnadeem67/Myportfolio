import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Blocks, GanttChartSquare, Gem } from "lucide-react";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description:
        'I offer professional web design services, creating visually appealing and user-friendly websites tailored to meet your specific needs and preferences. Whether you need a personal blog, a corporate site, or an e-commerce platform.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description:
        'My web development services provide robust and scalable solutions for your online presence. From building custom websites to developing complex web applications.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description:
        'I specialize in app development, crafting intuitive and feature-rich mobile applications for both iOS and Android platforms. Whether you need a simple app or a sophisticated enterprise-level application.',
    },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                My Services
            </h2>
            {/* grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index)=>{
                    return ( 
                    <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                    key={index}
                    >
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Services
