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
    <ProjectSlide id='test2'>
      <div>
        <ProjectName>TEST2</ProjectName>
        <AboutButton onClick={handleProjectModal}>about this app</AboutButton>
      </div>
      <LogbuddyImageMobile src={LogbuddyMobile} alt='logbuddy app' />
      {projectModalActive && (
        <ProjectModal
          onClose={handleProjectModal}
          ProjectTitle='Logbuddy'
          logbuddyInfos={logbuddyInfos}
          bgColor='#00687e'
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
  background-color: lightpink;
  border-radius: 20px;
  width: 80vw;
  height: 80vw;
  max-height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vw;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

const ProjectName = styled.h2`
  color: white;
  font-size: 2rem;
  margin: 0;

  @media screen and (min-width: 769px) {
    font-size: 3rem;
  }
`;

const LogbuddyImageMobile = styled.img`
  @media screen and (max-width: 1025px) {
    width: 70vw;
  }
  @media screen and (min-width: 1025px) {
    width: 50vw;
  }
`;

const AboutButton = styled.button`
  width: 100%;
  margin-top: 20px;
  border: none;
  background: transparent;
  color: hotpink;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    font-size: 1.3rem;
  }
`;
