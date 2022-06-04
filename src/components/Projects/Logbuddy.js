import { useState } from 'react';
import styled from 'styled-components';
// import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';

import LogbuddyMobile from '../../images/logbuddy.png';
import ProjectModal from './Modal';

export default function Logbuddy() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  return (
    <ProjectSlide id='logbuddy'>
      <SlideHeader>
        <ProjectName>LogBuddy</ProjectName>
        <LogbuddyImageMobile src={LogbuddyMobile} alt='logbuddy app' />
      </SlideHeader>
      <SlideMain>
        <button onClick={handleProjectModal}>about logbuddy</button>
        {/* <div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/FlyingMoe91/capstone-project'
          >
            LogBuddy Repository
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://logbuddy.vercel.app/'
          >
            LogBuddy Mobile-App
          </a>
        </div> */}
        {/* <div>
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
        </div> */}
      </SlideMain>
      {projectModalActive && <ProjectModal onClose={handleProjectModal} />}
    </ProjectSlide>
  );
  function handleProjectModal() {
    setProjectModalActive(!projectModalActive);

    if (!projectModalActive) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }
}

const ProjectSlide = styled.div`
  position: relative;
  background-color: #00687e;
  border-radius: 20px;
  width: 300px;
  height: 300px;
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
  color: white;
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

  button {
    width: 100px;
    margin: 0 auto;
    border: none;
    background: transparent;
    color: hotpink;
    cursor: pointer;
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
