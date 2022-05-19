import styled from 'styled-components';
import headerPic from '../../images/header-pic.png';
import Logbuddy from './Logbuddy';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// import { RiArrowRightSLine as ArrowRight } from 'react-icons/ri';

export default function Projects() {
  return (
    <ProjectsWrapper>
      <TopLine />
      <ProjectList>
        <li>
          <ProjectSlide id="projects">
            <ProjectName>my projects</ProjectName>
            <ProjectBackground>
              <p>LogBuddy</p>
              <p>another project</p>
              <p>another project</p>
              <HorizontalWalkthroughDiv>
                <HorizontalLine />
                <p>Horizontan Walkthrough</p>
                <a href="#logbuddy">
                  <ArrowIcon />
                  <ScreenReaderOnly>next project</ScreenReaderOnly>{' '}
                </a>
              </HorizontalWalkthroughDiv>
            </ProjectBackground>
            <NextProject href="#logbuddy">
              <ScreenReaderOnly>next project</ScreenReaderOnly>{' '}
            </NextProject>
          </ProjectSlide>
        </li>
        <li>
          <Logbuddy />
        </li>
        <BottomLine />
      </ProjectList>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;
  overflow-x: scroll;
  scroll-snap-align: center;
  line-height: 1.5rem;
  font-weight: 300;
  scrollbar-width: none; /*for firefox on windows */

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`;

const ProjectName = styled.h2`
  color: #de3612;
  font-size: 2rem;
  text-transform: uppercase;
`;

const ProjectBackground = styled.div`
  background: url(${headerPic}) 20% 48% no-repeat;
  background-size: cover;
  filter: grayscale(50%);
  color: white;
  width: 70%;
  height: 50%;
  position: relative;
  line-height: 5vh;
`;

const HorizontalWalkthroughDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  p {
    margin-bottom: 0;
  }
`;

const HorizontalLine = styled.div`
  width: 40vw;
  height: 1px;
  background: white;
  margin: 0 auto;
`;

const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
  font-size: 1.5rem;
  color: white;
`;

const NextProject = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  width: 20vw;
  height: 100vh;
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
