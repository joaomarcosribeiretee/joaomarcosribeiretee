import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Desenvolvedor Front-end',
      description: 'Especializado em criar interfaces modernas e responsivas'
    },
    {
      icon: GraduationCap,
      title: 'Estudante de Ciência da Computação',
      description: 'Sempre aprendendo e me atualizando com as últimas tecnologias'
    },
    {
      icon: Briefcase,
      title: 'Analista de QA Júnior',
      description: 'Experiência em garantir a qualidade de software'
    },
    {
      icon: Heart,
      title: 'Apaixonado por Tecnologia',
      description: 'Motivado por desafios e inovação constante'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada e paixão pela tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sou um desenvolvedor front-end apaixonado por criar experiências digitais 
                excepcionais. Atualmente cursando Ciência da Computação e trabalhando como 
                Analista de QA Júnior, estou sempre em busca de novos desafios e oportunidades 
                de crescimento.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Minha jornada na tecnologia começou com curiosidade e se transformou em paixão. 
                Tenho experiência em HTML, CSS, JavaScript, React, Vue.js e outras tecnologias 
                modernas do desenvolvimento web.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Quando não estou codando, gosto de explorar novas tecnologias, contribuir para 
                projetos open source e compartilhar conhecimento com a comunidade de desenvolvedores.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  Desenvolvimento Front-end
                </span>
                <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                  Quality Assurance
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '2+', label: 'Anos de Experiência' },
            { number: '10+', label: 'Projetos Concluídos' },
            { number: '5+', label: 'Tecnologias' },
            { number: '100%', label: 'Dedicação' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;