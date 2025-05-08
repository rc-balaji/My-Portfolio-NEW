import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaLanguage, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const About = () => {
  const { personal_info, interests } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450" 
                alt="Balaji working on code" 
                className="rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300" 
              />
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-primary rounded-lg py-3 px-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <p className="text-white font-medium">
                  <FaMapMarkerAlt className="inline mr-2" /> {personal_info.location}
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full font-medium">
                <FaUser className="inline mr-2" /> {personal_info.title}
              </div>
              
              <h3 className="text-2xl font-semibold font-poppins">
                Building digital solutions that make a difference
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {personal_info.bio}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary mr-3" />
                  <span>{portfolioData.contact.email}</span>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className="text-primary mr-3" />
                  <span>{portfolioData.contact.phone}</span>
                </div>
                
                <div className="flex items-center">
                  <FaBriefcase className="text-primary mr-3" />
                  <span>{personal_info.availability}</span>
                </div>
                
                <div className="flex items-center">
                  <FaLanguage className="text-primary mr-3" />
                  <span>{personal_info.languages.join(', ')}</span>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Interests:</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <motion.a 
                href={personal_info.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium hover:scale-105 transform transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="inline mr-2" /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
