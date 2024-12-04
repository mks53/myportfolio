/* eslint-disable react/prop-types */
import  { useState } from "react";
import { ExternalLink } from "lucide-react";
import savvyESC from "../assets/savvyESC.png";
import CDS from "../assets/CDS.png";

const ProjectCard = ({
  name,
  description,
  image,
  skills,
  liveLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 text-white p-6 flex flex-col justify-end 
        transform transition-transform duration-300 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-teal-primary text-white px-2 py-1 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-secondary p-2 rounded-full hover:bg-teal-primary transition">
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "SavvyESC",
      description:
        "Developed a web app for construction design with Google Maps, secure authentication, Stripe integration, and validations.",
      image: savvyESC,
      skills: ["React", "Firebase", "MaterialUI", "Node.js", "Stripe"],
      liveLink: "https://savvy-esc.web.app/",
    },
    {
      name: "City Driving School",
      description:
        "Developed a website for a driving school with a advance UI, contact form, and responsive design.",
      image: CDS,
      skills: ["React", "Firebase", "MaterialUI", "Canva", "Figma"],
      liveLink: "https://citydrivingschool.com.au/",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-secondary">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            skills={project.skills}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
