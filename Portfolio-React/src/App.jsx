import "./App.css";
import About from "./component/About";
import Experience from "./component/Experience";
import { Footer } from "./component/Footer";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Project from "./component/Project";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}

export default App;
