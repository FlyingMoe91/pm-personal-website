import styled from 'styled-components';
import Logbuddy from './Logbuddy';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import { BsCaretRightFill as Arrow, BsCircle } from 'react-icons/bs';
import Logbuddy2 from './Test1';
import TEST2 from './Test2';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    const project = document.querySelector('#test1');
    const ElementHeight = project.offsetHeight;
    const ElementWidth = project.offsetWidth;

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= -ElementHeight &&
        rect.left >= -ElementWidth &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) +
            ElementHeight &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth) +
            ElementWidth
      );
    }

    document.addEventListener(('scroll', 'click', 'touchmove'), function () {
      isInViewport(project) ? console.log('Inside') : console.log('Outside');
    });
  });

  return (
    <ProjectsWrapper id='projects'>
      <TopLine />
      <h2>MY PROJECTS</h2>
      <ProjectList id='ul'>
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
        <li>
          <ProjectSlide>
            <TEST2 />
          </ProjectSlide>
        </li>
      </ProjectList>
      <div>
        <ProjectNav />
        <ProjectNav />
        <ProjectNav />
      </div>
      <BottomLine />
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

const ProjectNav = styled(BsCircle)`
  margin: 5px;
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

  @media screen and (min-width: 769px) {
    top: 50%;
    left: 7vw;
  }
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
