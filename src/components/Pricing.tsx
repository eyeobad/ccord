import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  tap: { scale: 0.95 },
};

const Pricing: FC = () => {
  return (
    <section className="mt-20 bg-black text-white/75 py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
          Pricing
        </h2>
        <div className="mt-4 h-[2px] w-full max-w-3xl mx-auto bg-white/20" />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={option.title}
            className="w-full sm:w-80 lg:w-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <motion.div
              className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col min-h-[400px]"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
            >
              {/* Title */}
              <div>
                <motion.p
                  className="text-3xl sm:text-4xl font-semibold mb-2 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {option.title}
                </motion.p>
                {option.title === "Pro" && (
                  <motion.span
                    className="inline-block bg-gradient-to-r from-[#ee9453] to-[#e99b63] text-transparent bg-clip-text text-sm font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    (Most Popular)
                  </motion.span>
                )}
              </div>

              {/* Price */}
              <div className="mt-6 mb-8">
                <motion.span
                  className="text-5xl font-bold mr-2 text-white opacity-75"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {option.price}
                </motion.span>
                {option.price !== "Custom" && (
                  <motion.span
                    className="text-sm text-white/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    /month
                  </motion.span>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4">
                {option.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <FaCheckCircle className="mr-3 text-gray-400" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.a
                href="#"
                className="mt-8 bg-gradient-to-r from-[#ee9453] to-[#e99b63] text-white text-center py-3 rounded-lg hover:from-[#9e5b2b] hover:to-[#e48b4c] transition-colors duration-500"
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
    </section>
  );
};

export default Pricing;
