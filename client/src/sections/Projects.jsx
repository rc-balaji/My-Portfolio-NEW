import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioData from '@/data/mydata';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category || 'Other'))];
  
  // Filter projects based on selected category
  useEffect(() => {
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      
      if (activeFilter === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeFilter));
      }
    }, 500);
  }, [activeFilter, projects]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const techBadgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[hsl(var(--dark-bg))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 
              variants={projectVariants}
              className="text-3xl md:text-4xl font-bold gradient-text"
            >
              My Recent Projects
            </motion.h2>
            <motion.p 
              variants={projectVariants}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Here are some of my latest projects showcasing my skills and experience.
            </motion.p>
          </div>
          
          {/* Project Filter */}
          <motion.div 
            variants={projectVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="bg-white dark:bg-[hsl(var(--dark-card))] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden group h-48">
                    <img
                      src={project.image || "https://via.placeholder.com/600x400"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400?text=Project";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-between">
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech_stack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          variants={techBadgeVariants}
                          initial="initial"
                          whileInView="animate"
                          custom={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* View More Button */}
          <motion.div 
            variants={projectVariants}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/balajiC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white rounded-lg font-medium transition-transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <FaGithub className="mr-2" size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;