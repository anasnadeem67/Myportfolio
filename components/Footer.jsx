import Socials from "./Social"


const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-between'>
          {/* social */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-8 mb-4'
          iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright &copy; Anas Nadeem. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
