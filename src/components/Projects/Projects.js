import styled from 'styled-components';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import Logbuddy from './Logbuddy';
import LeanCoffeeBoard from './LeanCoffeeBoard';
import QuizzApp from './QuizzApp';
import { BsCaretRightFill as Arrow } from 'react-icons/bs';
import RockPaperScissors from './RockPaperScissors';

export default function Projects() {
  return (
    <ProjectsWrapper id='projects'>
      <h2>MY PROJECTS</h2>
      <ProjectList id='ul'>
        <li>
          <ProjectSlide>
            <Logbuddy />
          </ProjectSlide>
        </li>
        <li>
          <ProjectSlide>
            <LeanCoffeeBoard />
          </ProjectSlide>
        </li>
        <li>
          <ProjectSlide>
            <RockPaperScissors />
          </ProjectSlide>
        </li>
        <li>
          <ProjectSlide>
            <QuizzApp />
          </ProjectSlide>
        </li>
      </ProjectList>
      <PreviousProject onClick={handleScrollLeft}>
        <Arrow />
        <ScreenReaderOnly>previous project</ScreenReaderOnly>
      </PreviousProject>
      <NextProject onClick={handleScrollRight}>
        <Arrow />
        <ScreenReaderOnly>next project</ScreenReaderOnly>
      </NextProject>
    </ProjectsWrapper>
  );

  function handleScrollLeft() {
    const list = document.getElementById('ul');
    list.scrollBy(-window.innerWidth, 0);
  }

  function handleScrollRight() {
    const list = document.getElementById('ul');
    list.scrollBy(window.innerWidth, 0);
  }
}

const ProjectsWrapper = styled.section`
  position: relative;
  text-align: center;
  font-weight: 300;
  padding: 30px 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

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

  li {
    scroll-snap-align: center;
  }
`;

const ProjectSlide = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const NextProject = styled.a`
  position: absolute;
  top: 45%;
  right: 0;
  z-index: 200;
  font-size: 4rem;
  color: black;
  padding: 0;
  height: 64px;
  width: 64px;
  border: none;
  background: transparent;
  cursor: pointer;

  :hover {
    color: hotpink;
  }

  @media screen and (min-width: 769px) {
    top: 50%;
    right: 7vw;
  }
`;

const PreviousProject = styled.button`
  position: absolute;
  transform: rotate(180deg);
  top: 45%;
  left: 0;
  z-index: 200;
  font-size: 4rem;
  color: black;
  padding: 0;
  height: 64px;
  width: 64px;
  border: none;
  background: transparent;
  cursor: pointer;

  :hover {
    color: hotpink;
  }

  @media screen and (min-width: 769px) {
    top: 50%;
    left: 7vw;
  }
`;
