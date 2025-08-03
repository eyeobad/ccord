import BannerImage from "../assets/website/laptop.jpg";
import AppstoreImage from "../assets/website/app_store.png";
import PlaystoreImage from "../assets/website/play_store.png";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${BannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AppBanner = () => {
  return (
    <div className="container my-14 text-black mx-auto">
      <div
        style={BannerStyle}
        className="relative sm:min-h-[400px] rounded-xl overflow-hidden shadow-lg"
      >
        {/* darken background */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* full-bleed glass blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>

        {/* content, always right-aligned */}
        <div className="relative flex justify-end items-center h-full px-6 py-12">
          <div className="max-w-xl mx-auto space-y-6">
            <motion.h1
              className="text-2xl text-center sm:text-4xl font-semibold text-white"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2, damping: 10 }}
            >
              Download the App
            </motion.h1>
            <motion.p
              className="text-center text-white/80 sm:px-20"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2, damping: 10 }}
            >
              Download the app to get a nicer experience
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2, damping: 10 }}
            >
              <a href="#" className="max-w-[150px] md:max-w-[200px] sm:max-w-[120px]">
                <img src={AppstoreImage} alt="App Store" />
              </a>
              <a href="#" className="max-w-[150px] md:max-w-[200px] sm:max-w-[120px]">
                <img src={PlaystoreImage} alt="Play Store" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
