import { useEffect, useRef } from 'react';
import portfolioData from '@/data/portfolio-data';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const { skills } = portfolioData;
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="py-16 md:py-24 reveal" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My Skills</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            I specialize in these technologies to create efficient and scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* First column of skills */}
          <div className="space-y-6">
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}</span>
                </div>
                <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: skill.level } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: 0.2 + index * 0.1
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second column of skills */}
          <div className="space-y-6">
            {skills.slice(6).map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}</span>
                </div>
                <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: skill.level } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeOut",
                      delay: 0.2 + (index + 6) * 0.1
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
