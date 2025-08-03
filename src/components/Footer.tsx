
import { FaFacebook, FaInstagram, FaTelegram, FaGoogle, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import CreditCard from "../assets/website/credit-cards.webp";

const Footer = () => (
  <footer className="bg-gradient-to-r from-primary to-primaryDark text-white pt-12 pb-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Details */}
        <div>
          <h2 className="text-3xl font-medium uppercase mb-4 opacity-75">Ccords</h2>
          <p className="text-sm leading-relaxed mb-4 opacity-75">
            Welcome to Ccords. 
          </p>
          <div className="flex items-center mb-2 opacity-75">
            <FaPhone className="mr-2" />
            <span className="text-sm">+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center opacity-75">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-sm">New York, New York</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:flex md:justify-center items-center flex gap-4 md:gap-0">
          <div>
            <h3 className="text-xl font-semibold mb-4 opacity-75">Quick Links</h3>
            <ul className="space-y-2 opacity-75">
              {['Home', 'About', 'Contact us', 'Privacy Policy'].map(link => (
                <li key={link}>
                  <motion.a
                    href={`#${link.replace(/ /g, '-').toLowerCase()}`}
                    className="text-sm hover:underline"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:mt-0 md:ml-10">
           
            <ul className="space-y-2 mt-5 md:mt-12 opacity-75">
              {['Careers', 'Blog', 'Support', 'Sitemap'].map(link => (
                <li key={link}>
                  <motion.a
                    href={`#${link.replace(/ /g, '-').toLowerCase()}`}
                    className="text-sm hover:underline"
                    whileHover={{ x: 4 }}
                  > 
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow & Payment */}
        <div>
          <h3 className="text-xl font-semibold mb-4 opacity-75">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6 opacity-75">
            {[
              { icon: <FaFacebook />, href: 'https://facebook.com' },
              { icon: <FaInstagram />, href: 'https://instagram.com' },
              { icon: <FaTelegram />, href: 'https://telegram.org' },
              { icon: <FaGoogle />, href: 'https://google.com' }
            ].map(({ icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 opacity-75">Payment Methods</h3>
          <motion.img
            src={CreditCard}
            alt="Payment methods"
            className="max-w-full h-8"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>

      <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm opacity-75">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
