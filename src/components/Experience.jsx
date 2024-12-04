/* eslint-disable react/prop-types */
import { Briefcase } from "lucide-react";

const ExperienceCard = ({
  clientName,
  tenure,
  role,
  summary,
  responsibilities,
  className,
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-center items-center text-center ${className}`}>
      <div className="flex items-center justify-center mb-4">
        <div className="mr-4 text-teal-primary">
          <Briefcase size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-teal-secondary dark:text-text-dark-contrast">
            {clientName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{tenure}</p>
          <h4 className="text-xl font-medium text-text-light dark:text-text-dark-contrast">{role}</h4>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{summary}</p>
      <div>
        <h5 className="font-semibold mb-2 text-text-light dark:text-text-dark-contrast">Key Responsibilities:</h5>
        <ul className="list-none list-inside text-gray-700 dark:text-gray-300">
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
        "Developed Web App to automate the process of designing and developing ESC plans used in construction planning and government approvals.",
      responsibilities: [
        "Developed advanced user interfaces with React, improving engagement and functionality.",
        "Integrated front-end with backend services, boosting scalability and performance.",
        "Created modular components for streamlined development and maintainability.",
        "Ensured clear communication with clients and teams for timely, high-quality project delivery.",
      ],
    },
    {
      clientName: "OzHarvest",
      tenure: "Jan 2024 - Jun 2024",
      role: "Frontend Developer",
      summary:
        "Developed React-based visitor check-in system for OzHarvest with API integration and team support.",
      responsibilities: [
        "Created responsive, intuitive interfaces using React with seamless API integrations",
        "Collaborated cross-functionally with backend developers to integrate server-side logic",
        "Supported team efforts in reporting, testing, and documentation",
        "",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-secondary dark:text-text-dark-contrast">
        Professional Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            clientName={exp.clientName}
            tenure={exp.tenure}
            role={exp.role}
            summary={exp.summary}
            responsibilities={exp.responsibilities}
            className="border-2 border-transparent hover:border-teal-500 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
