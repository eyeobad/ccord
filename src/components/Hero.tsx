import { useEffect, useState, lazy, Suspense } from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';

// Lazy load Spline for smaller initial bundle
const Spline = lazy(() => import('@splinetool/react-spline'));

function Hero() {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const splineURL = "https://prod.spline.design/bKz8EVDNv4JgsYnI/scene.splinecode";

  useEffect(() => {
    // Preload Spline scene
    fetch(splineURL, { mode: "cors" })
      .then(res => res.blob())
      .then(() => {
        setSceneLoaded(true);
      })
      .catch(err => console.error("Spline preload failed:", err));
  }, []);

  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative">
      <motion.div
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 p-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          type: "spring",
          damping: 60,
          stiffness: 120
        }}
        viewport={{ once: true }}
      >
        <div className="relative w-[95px] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(225,225,225,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <DiamondIcon /> INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR <br />
          DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          The best way to upscale transactional emails at scale for marketing.
        </p>

        <div className="flex gap-4 mt-12">
          <a
            href=""
            className="border border-[#2a2a2a] py-[10px] md:py-3 px-3 md:px-4 rounded-full text-sm md:text-base font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            Documentation
            <div className="hidden md:inline-block">
              <OpenInNewIcon />
            </div>
          </a>

          <a
            href=""
            className="border border-[#2a2a2a] py-3 md:py-3 px-10 md:px-7 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            Get started
          </a>
        </div>
      </motion.div>

      {/* 3D Model or Loader */}
      <div className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] left-[-2%] h-full w-full flex items-center justify-center">
        {!sceneLoaded ? (
          <div className="animate-pulse w-[400px] h-[400px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-400">
            Loading 3D...
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="animate-pulse w-[400px] h-[400px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-400">
                Loading 3D...
              </div>
            }
          >
            <Spline className="h-full" scene={splineURL} />
          </Suspense>
        )}
      </div>
    </main>
  );
}

export default Hero;
