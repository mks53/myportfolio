import React from "react";
import mksImage from "../assets/mks.jpeg";
import murtazaResume from "../assets/Murtaza Developer Resume.pdf";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="flex items-center space-x-8">
        <div className="flex-shrink-0">
          <img
            src={mksImage}
            alt="Your Name"
            className="w-64 h-64 object-cover rounded-full border-4 border-teal-primary shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-4 text-teal-secondary">
            Hi, I&apos;m Murtaza
          </h1>
          <h2 className="text-3xl font-bold mb-4 text-teal-secondary">
            Frontend Developer
          </h2>
          <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">
            Detail-oriented front-end developer skilled in React, HTML, CSS, and
            JavaScript, with a proven record of delivering user-friendly web
            applications and intuitive user experiences.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href={murtazaResume}
              download
              className="bg-teal-primary text-white px-6 py-3 rounded-lg hover:bg-teal-secondary transition">
              Download CV
            </a>
            <a
              href="#contact"
              className="border-2 border-teal-primary text-teal-primary px-6 py-3 rounded-lg hover:bg-teal-primary hover:text-white transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
