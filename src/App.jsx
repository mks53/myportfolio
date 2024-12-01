import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
