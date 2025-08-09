import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Animation Variants
  const navContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);

    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
      if (isOpen) {
        mobileMenu.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("hidden");
      }
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl lg:text-4xl font-light m-0 py-3 ps-2 z-50"
      >
        CCORDS
      </motion.h1>

      {/* Desktop Nav */}
      <motion.nav
        className="hidden md:flex justify-between items-center gap-8"
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href=""
          variants={navItemVariants}
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          ABOUT US
        </motion.a>
        <motion.a
          href=""
          variants={navItemVariants}
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          DOCS
        </motion.a>
        <motion.a
          href=""
          variants={navItemVariants}
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          COMPANY
        </motion.a>
        <motion.a
          href=""
          variants={navItemVariants}
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          RESOURCES
        </motion.a>
      </motion.nav>

      <motion.button
        variants={navItemVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:block bg-[#a7a7a7] text-black px-8 py-3 rounded-full font-semibold border-none transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        Sign up
      </motion.button>

      {/* Mobile Toggle Button */}
      <motion.button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMenu}
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? (
          <CloseIcon className="text-white" />
        ) : (
          <MenuIcon className="text-white" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="mobileMenu"
        className="hidden fixed top-0 bottom-0 right-0 left-0 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-lg pt-60"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            ABOUT US
          </a>
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            DOCS
          </a>
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            COMPANY
          </a>
          <a
            href=""
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            RESOUR
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
