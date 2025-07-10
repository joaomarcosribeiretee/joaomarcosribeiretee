import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'React', level: 75, icon: '⚛️' },
        { name: 'Vue.js', level: 70, icon: '💚' },
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 65, icon: '🟢' },
        { name: 'Python', level: 60, icon: '🐍' },
        { name: 'MySQL', level: 70, icon: '🗄️' },
        { name: 'Git', level: 80, icon: '📝' },
        { name: 'VS Code', level: 90, icon: '💻' },
      ]
    },
    {
      title: 'Design & QA',
      skills: [
        { name: 'Figma', level: 75, icon: '🎯' },
        { name: 'Photoshop', level: 65, icon: '🖼️' },
        { name: 'Testing', level: 80, icon: '🧪' },
        { name: 'Quality Assurance', level: 85, icon: '✅' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas e tecnologias que uso para criar soluções incríveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Tecnologias que Domino
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              { name: 'HTML5', color: 'from-orange-400 to-orange-600' },
              { name: 'CSS3', color: 'from-blue-400 to-blue-600' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
              { name: 'React', color: 'from-cyan-400 to-cyan-600' },
              { name: 'Vue.js', color: 'from-green-400 to-green-600' },
              { name: 'Node.js', color: 'from-green-500 to-green-700' },
              { name: 'Python', color: 'from-blue-500 to-yellow-500' },
              { name: 'MySQL', color: 'from-blue-600 to-blue-800' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                title={tech.name}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;