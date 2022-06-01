import styled from 'styled-components';
import Logbuddy from './Logbuddy';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import { BsCaretRightFill as ArrowRight, BsCircle } from 'react-icons/bs';
import Logbuddy2 from './Logbuddy copy';

// import { RiArrowRightSLine as ArrowRight } from 'react-icons/ri';

export default function Projects() {
  return (
    <ProjectsWrapper id='projects'>
      <TopLine />
      <h2>MY PROJECTS</h2>
      <ProjectList>
        <li>
          <ProjectSlide>
            <Logbuddy />
          </ProjectSlide>
        </li>
        <li>
          <ProjectSlide>
            <Logbuddy2 />
          </ProjectSlide>
        </li>
      </ProjectList>
      <div>
        <ProjectNav />
        <ProjectNav />
        <ProjectNav />
      </div>
      <BottomLine />
      <NextProject href='#logbuddy2'>
        <ArrowRight />
        <ScreenReaderOnly>next project</ScreenReaderOnly>
      </NextProject>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;
  font-weight: 300;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10vh;

  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  overflow: scroll hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /*for firefox on windows */

  ::-webkit-scrollbar {
    display: none;
  }

  li {
    scroll-snap-align: center;
  }
`;

const ProjectSlide = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

const ProjectNav = styled(BsCircle)`
  margin: 5px;
`;

const NextProject = styled.a`
  position: absolute;
  top: 45%;
  right: 0;
  z-index: 900;
  font-size: 4rem;
  color: black;
`;

const TopLine = styled.div`
  width: 1px;
  height: 4vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
`;

const BottomLine = styled.div`
  width: 1px;
  height: 4vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
`;
