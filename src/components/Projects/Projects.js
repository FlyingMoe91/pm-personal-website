import styled from 'styled-components';
import Logbuddy from './Logbuddy';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import { BsCaretRightFill as Arrow, BsCircle } from 'react-icons/bs';
import Logbuddy2 from './Test1';
import TEST2 from './Test2';

export default function Projects() {
  //   if (window.addEventListener) {
  //   window.addEventListener('resize', function () {
  //     if (window.innerWidth < 400) {
  //     } else {
  //     }
  //   });
  // }

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
      <NextProject href='#test1'>
        <Arrow />
        <ScreenReaderOnly>next project</ScreenReaderOnly>
      </NextProject>
    </ProjectsWrapper>
  );

  function handleScrollLeft() {
    const list = document.getElementById('ul');

    if (window.innerWidth < 400) {
      list.scrollBy(-400, 0);
    } else {
      list.scrollBy(-1000, 0);
    }
  }

  // function handleScrollRight() {
  //   const list = document.getElementById('ul');

  //   if (window.innerWidth < 400) {
  //     list.scrollBy(400, 0);
  //   } else {
  //     list.scrollBy(1000, 0);
  //   }
  // }
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
