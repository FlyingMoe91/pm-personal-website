import Intro from './components/Intro/Intro';
import TechStack from './components/TechStack/TechStack';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/Past/Past';

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <TechStack />
      <Projects />
      <About />
    </>
  );
}
