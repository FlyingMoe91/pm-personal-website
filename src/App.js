import Intro from './components/Intro/Intro';
import TechStack from './components/TechStack/TechStack';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/Past/Past';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
