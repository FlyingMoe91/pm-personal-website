import { useState } from 'react';
import styled from 'styled-components';

import ProjectModal from './Modal';

export default function RockPaperScissors() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  const RockPaperScissorsInfos = [
    {
      projectTitle: 'Quizz App',
      pic1: 'http://source.unsplash.com/random',
      pic1description: '',
      pic2: 'http://source.unsplash.com/random',
      pic2description: '',
      pic3: 'http://source.unsplash.com/random',
      pic3description: '',
      pic4: 'http://source.unsplash.com/random',
      pic4description: '',
      github_link: 'https://github.com/FlyingMoe91/rock-paper-scissor',
      vercel_link: 'https://flyingmoe91.github.io/rock-paper-scissor/',
      intro: '',
      description1: '',
      description2: '',
      techstack: '',
    },
  ];

  return (
    <ProjectSlide id='rockpaperscissors'>
      <div>
        <ProjectName>Rock, Paper, Scissors</ProjectName>
        <AboutButton onClick={handleProjectModal}>about this app</AboutButton>
      </div>
      <LogbuddyImageMobile
        src={'http://source.unsplash.com/random'}
        alt='rock, paper, scissors'
        height='200px'
      />
      {projectModalActive && (
        <ProjectModal
          onClose={handleProjectModal}
          projectInfos={RockPaperScissorsInfos}
          bgColor='rgb(111, 162, 250)'
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
  background-color: rgb(111, 162, 250);
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
  color: blue;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    font-size: 1.3rem;
  }
`;
