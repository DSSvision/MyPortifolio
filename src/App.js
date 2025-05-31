import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <div className="thirdCard">
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
