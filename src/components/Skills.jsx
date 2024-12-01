import React from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs 
} from 'react-icons/si';

const SkillCard = ({ Icon, name, level }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center">
      <div className="text-5xl text-teal-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex space-x-1">
        {[1, 2, 3].map((star) => (
          <span 
            key={star} 
            className={`text-2xl ${
              star <= level ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { Icon: SiReact, name: 'React', level: 3 },
    { Icon: SiJavascript, name: 'JavaScript', level: 3 },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', level: 3 },
    { Icon: SiHtml5, name: 'HTML5', level: 3 },
    { Icon: SiCss3, name: 'CSS3', level: 3 },
    { Icon: SiNodedotjs, name: 'Node.js', level: 2 }
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-secondary">
        My Skills
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            Icon={skill.Icon} 
            name={skill.name} 
            level={skill.level} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;