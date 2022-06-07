import { useState } from 'react';
import styled from 'styled-components';
// import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';

import LogbuddyMobile from '../../images/projects/logbuddy/Logbuddy_desktop.png';
import ProjectModal from './Modal';
import logbuddy_home from '../../images/projects/logbuddy/Logbuddy_home.png';
import logbuddy_dives from '../../images/projects/logbuddy/Logbuddy_dives.png';
import logbuddy_certs from '../../images/projects/logbuddy/Logbuddy_certs.png';
import logbuddy_map from '../../images/projects/logbuddy/Logbuddy_map.png';

export default function Logbuddy() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  const logbuddyInfos = [
    {
      projectTitle: 'LogBuddy',
      pic1: logbuddy_home,
      pic1description: 'logbuddy homescreen',
      pic2: logbuddy_dives,
      pic2description: 'logbuddy dives',
      pic3: logbuddy_certs,
      pic3description: 'logbuddy certifications',
      pic4: logbuddy_map,
      pic4description: 'logbuddy map',
      github_link: 'https://github.com/FlyingMoe91/capstone-project',
      vercel_link: 'https://logbuddy.vercel.app/',
      intro:
        'LogBuddy is my capstone project which I was doing in the last four weeks of my bootcamp at neuefische.',
      description1:
        'It is a musthave for every passionate or professional diver and bubblemaker. It connects the underwater experience to the phone.',
      description2:
        ' Keeping track of dives, divespots or photos made easy. With Logbuddy all important information are quickly accessible and always in your pocket with you.',
      techstack:
        'Tech stack: React, React Router, React Testing Library, Storybook, Styled Components, Cloudinary, Leaflet, Mapbox, Axios, Vercel',
    },
  ];

  return (
    <ProjectSlide id='logbuddy'>
      <SlideHeader>
        <ProjectName>LogBuddy</ProjectName>
        <LogbuddyImageMobile src={LogbuddyMobile} alt='logbuddy app' />
      </SlideHeader>
      <SlideMain>
        <button onClick={handleProjectModal}>about logbuddy</button>
      </SlideMain>
      {projectModalActive && (
        <ProjectModal
          onClose={handleProjectModal}
          ProjectTitle='Logbuddy'
          logbuddyInfos={logbuddyInfos}
        />
      )}
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

  button {
    width: 150px;
    margin: 0 auto;
    border: none;
    background: transparent;
    color: hotpink;
    cursor: pointer;
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
