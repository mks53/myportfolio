import React from "react";
import { Briefcase } from "lucide-react";

const ExperienceCard = ({
  clientName,
  tenure,
  role,
  summary,
  responsibilities,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <div className="flex items-start mb-4">
        <div className="mr-4 text-teal-primary">
          <Briefcase size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-teal-secondary">
            {clientName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{tenure}</p>
          <h4 className="text-xl font-medium">{role}</h4>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{summary}</p>
      <div>
        <h5 className="font-semibold mb-2">Key Responsibilities:</h5>
        <ul className="list- list-inside text-gray-700 dark:text-gray-300">
          {responsibilities.map((resp, index) => (
            <li key={index} className="mb-1">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      clientName: "Scaleup Consulting",
      tenure: "Feb 2024 - Present",
      role: "JavaScript Developer",
      summary:
        "Led frontend development for multiple web applications, focusing on creating scalable and responsive user interfaces.",
      responsibilities: [
        "Developed advanced user interfaces with React, improving engagement and functionality.",
        "Integrated front-end with backend services, boosting scalability and performance.",
        "Created modular components for streamlined development and maintainability.",
        "Ensured clear communication with clients and teams for timely, high-quality project delivery.",
      ],
    },
    {
      clientName: "OzHarvest",
      tenure: "Jun 2024 - Jun 2024",
      role: "Frontend Developer",
      summary:
        "Contributed to the development of interactive web applications and improved overall frontend performance.",
      responsibilities: [
        "Created pixel-perfect designs from wireframes and mockups",
        "Optimized application performance and load times",
        "Implemented state management using Redux",
        "Integrated RESTful APIs and handled data fetching",
      ],
    },
    {
      clientName: "StartUp Innovators",
      tenure: "Jan 2018 - May 2019",
      role: "Junior Frontend Developer",
      summary:
        "Gained foundational experience in frontend development and modern web technologies.",
      responsibilities: [
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Learned and implemented React best practices",
        "Worked on cross-browser compatibility",
        "Assisted in UI/UX design improvements",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-secondary">
        Professional Experience
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            clientName={exp.clientName}
            tenure={exp.tenure}
            role={exp.role}
            summary={exp.summary}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
