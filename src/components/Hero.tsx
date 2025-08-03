import DiamondIcon from '@mui/icons-material/Diamond';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Spline from '@splinetool/react-spline';  
import { motion } from 'framer-motion';
function Hero() {
  return (
 <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
<motion.div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 p-6 ' 
 initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
      whileInView={{ opacity: 1, x: 0 }}   // Animate to visible and its original position
      transition={{ duration: 1.5, ease: "easeOut" ,type:"spring", damping: 60,stiffness: 120, }} // Control the animation speed and easing
      viewport={{ once: true }} // Ensures the animation only runs once
      
      
>
  
  <div className='relative w-[95] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(225,225,225,0.4)] rounded-full '>
    <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 '>
     <DiamondIcon/> INTRODUCING
    </div>
  </div>
  {/* main heading */}
 <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
    EMAIL FOR <br/>
    DEVELOPERS
 </h1>
{/* description */}
<p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] '> 
  the best way to reach to upscale transactional emails at scale for marketing

</p>

{/* buttons */}
<div className='flex gap-4 mt-12'>
    <a href="" className='border border-[#2a2a2a] py-3 md:py-3 px-3 md:px-4 rounded-full text-[0.65rem] md:text-base font-extrabold  md:font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]
    '>Documentation
        <OpenInNewIcon className='  '/>
    </a>

      <a href="" className='border border-[#2a2a2a] py-3 md:py-3 px-10 md:px-7 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white
    '>Getstarted
      
    </a>
</div>
</motion.div>


{/* 3d model */}
 <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] left-[-2%]  h-full' scene="https://prod.spline.design/bKz8EVDNv4JgsYnI/scene.splinecode" />
 </main> 
  )
}

export default Hero
