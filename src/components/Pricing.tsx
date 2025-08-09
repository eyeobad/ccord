import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import React from "react";

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

export const pricingOptions: PricingOption[] = [
  {
    title: "Basic",
    price: "$9",
    features: ["Up to 5 projects", "Basic support", "1 GB storage"],
  },
  {
    title: "Pro",
    price: "$29",
    features: [
      "Unlimited projects",
      "Priority support",
      "10 GB storage",
      "Team collaboration",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Unlimited storage",
      "SLA & compliance",
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring" as const, stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

const Pricing: React.FC = () => {
  return (
    <div className="mt-20 bg-black text-white/75 py-12 p-6 md:p-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-12 tracking-wide font-bold">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <motion.div
              className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl min-h-[400px] flex flex-col"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
            >
              <div>
                <motion.p
                  className="text-3xl sm:text-4xl font-semibold mb-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {option.title}
                </motion.p>
                {option.title === "Pro" && (
                  <motion.span
                    className="inline-block bg-gradient-to-r from-[#ee9453] to-[#e99b63] text-transparent bg-clip-text text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    (Most Popular)
                  </motion.span>
                )}
              </div>

              <div className="mt-6 mb-8">
                <motion.span
                  className="text-5xl font-bold mr-2 text-white opacity-75"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {option.price}
                </motion.span>
                <motion.span
                  className="text-sm text-white/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  /month
                </motion.span>
              </div>

              <ul className="flex-1 space-y-4">
                {option.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <FaCheckCircle className="mr-3 text-gray/60" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#"
                className="mt-8 bg-gradient-to-r from-[#ee9453] to-[#e99b63] text-white text-center py-3 rounded-lg hover:from-[#9e5b2b] hover:to-[#e48b4c] duration-500 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Plan
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
