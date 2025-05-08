import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const Hero = () => {
  const { personal_info } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-primary font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {personal_info.name}
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto md:mx-0"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personal_info.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {personal_info.tagline}
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {personal_info.bio}
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button 
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium hover:scale-105 transform transition-transform duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 border-2 border-primary text-primary dark:text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium hover:scale-105 transform transition-transform duration-300"
              >
                Contact Me
              </button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a 
                href={personal_info.social_links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personal_info.social_links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personal_info.social_links.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href={personal_info.social_links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img 
                src={personal_info.profile_picture} 
                alt={`${personal_info.name} - ${personal_info.title}`} 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
