import mksImage from "../assets/mks.jpeg";
import murtazaResume from "../assets/Murtaza Developer Resume.pdf";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiFirebase,
  SiCss3,
} from "react-icons/si";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <SiReact className="logo-animation absolute text-teal-500 w-16 h-16" style={{ top: "10%", left: "20%" }} />
        <SiJavascript className="logo-animation absolute text-teal-500 w-16 h-16" style={{ top: "40%", left: "60%" }} />
        <SiFirebase className="logo-animation absolute text-teal-500 w-16 h-16" style={{ top: "70%", left: "30%" }} />
        <SiHtml5 className="logo-animation absolute text-teal-500 w-16 h-16" style={{ top: "20%", left: "80%" }} />
        <SiNodedotjs className="logo-animation absolute text-teal-500 w-16 h-16" style={{ top: "50%", left: "10%" }} />
        <SiCss3 className="logo-animation absolute text-teal-500 w-16 h-16" style={{ top: "80%", left: "50%" }} />
        {/* Add more icons as needed */}
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 z-10">
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={mksImage}
                alt="Murtaza K Sherwala"
                className="w-64 h-64 object-cover rounded-full border-4 border-teal-primary shadow-lg"
              />
            </div>
            <div className="flip-card-back">
              <img
                src={mksImage}
                alt="Murtaza K Sherwala"
                className="w-64 h-64 object-cover rounded-full border-4 border-teal-primary shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-teal-secondary">
            Hi, I&apos;m Murtaza
          </h1>
          <h2 className="text-3xl font-bold mb-4 text-teal-secondary">
            Frontend Developer
          </h2>
          <p className="text-xl max-w-2xl text-black-700 dark:text-gray-300">
            Detail-oriented front-end developer skilled in React, HTML, CSS, and
            JavaScript, with a proven record of delivering user-friendly web
            applications and intuitive user experiences.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
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