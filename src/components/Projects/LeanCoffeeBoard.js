import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

import ProjectModal from './Modal';

export default function LeanCoffeeBoard() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  const leanCoffeeBoardInfos = [
    {
      projectTitle: 'Lean Coffee Board',
      pic1: 'http://source.unsplash.com/random',
      pic1description: '',
      pic2: 'http://source.unsplash.com/random',
      pic2description: '',
      pic3: 'http://source.unsplash.com/random',
      pic3description: '',
      pic4: 'http://source.unsplash.com/random',
      pic4description: '',
      github_link: 'https://github.com/FlyingMoe91/lean-coffee-board',
      vercel_link: 'http://lean-coffee-board-sandy.vercel.app/',
      intro: '',
      description1: '',
      description2: '',
      techstack: '',
    },
  ];

  return (
    <ProjectSlide id='leanCoffeeBoard'>
      <div>
        <ProjectName>Lean Coffee Board</ProjectName>
        <AboutButton onClick={handleProjectModal}>about this app</AboutButton>
      </div>
      <LogbuddyImageMobile
        src={'http://source.unsplash.com/random'}
        alt='lean coffee board'
        height='200px'
      />
      {projectModalActive && (
        <ProjectModal
          onClose={handleProjectModal}
          projectInfos={leanCoffeeBoardInfos}
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
  background-color: #cdf2f2;
  border-radius: 5px;
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
  font-size: 1.7rem;

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

const AboutButton = styled(Button)`
  @media screen and (min-width: 769px) {
    font-size: 1.3rem;
  }
`;
