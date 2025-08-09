import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const navItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.li key={item} variants={navItemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
