import styled from 'styled-components';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';

import LogbuddyMobile from '../../images/logbuddy.png';
// import { RiArrowRightSLine as ArrowRight } from 'react-icons/ri';
// import { RiArrowLeftSLine as ArrowLeft } from 'react-icons/ri';

export default function Logbuddy() {
  return (
    <ProjectSlide id="logbuddy">
      <SlideHeader>
        <ProjectName>LogBuddy</ProjectName>
        <LogbuddyImageMobile src={LogbuddyMobile} alt="logbuddy app" />
      </SlideHeader>
      <SlideMain>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/FlyingMoe91/capstone-project"
          >
            LogBuddy Repository
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://logbuddy.vercel.app/"
          >
            LogBuddy Mobile-App
          </a>
        </div>
        <div>
          <p>
            LogBuddy is my capstone project which I was doing in the last four
            weeks of my bootcamp at neuefische.
          </p>
          <p>
            It is a musthave for every passionate or professional diver and
            bubblemaker. It connects the underwater experience to the phone.
            Keeping track of dives, divespots or photos made easy. With Logbuddy
            all important information are quickly accessible and always in your
            pocket with you.
          </p>
        </div>
      </SlideMain>
      <NextSlide href="#projects">
        <ScreenReaderOnly>previous project</ScreenReaderOnly>
      </NextSlide>
      <PreviousSlide href="#projects">
        <ScreenReaderOnly>next project</ScreenReaderOnly>
      </PreviousSlide>
    </ProjectSlide>
  );
}

const ProjectSlide = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 30px;
`;

const SlideHeader = styled.div`
  width: 100%;
  margin: 20px 0;

  @media screen and (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    margin: 10vh 0;
  }
`;

const ProjectName = styled.h2`
  color: #00687e;
  font-size: 2rem;
`;

const LogbuddyImageMobile = styled.img`
  @media screen and (max-width: 1025px) {
    width: 70vw;
  }
  @media screen and (min-width: 1025px) {
    width: 40vw;
  }
`;

const SlideMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;

  div {
    margin: 0 auto;
  }

  a {
    display: block;
    width: 50vw;
    color: #00687e;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: #00687e;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;

    div {
      margin: 0;
    }

    a {
      width: 250px;
      margin: 5vh 0;
    }

    p {
      margin: 5vh 0;
      text-align: left;
      font-size: 1.3rem;
      line-height: 2rem;
      width: 55vw;

      @media screen and (max-height: 766px) {
        font-size: 1rem;
      }
    }
  }
`;

const PreviousSlide = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
`;

const NextSlide = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  width: 20vw;
  height: 100vh;
`;
