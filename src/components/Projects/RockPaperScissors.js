import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import RpsDesktop from '../../images/projects/rock-paper-scissor/rockpaperscissor.png';
import RpsStart from '../../images/projects/rock-paper-scissor/rockpaperscissors-start.png';
import RpsInGame from '../../images/projects/rock-paper-scissor/rockpaperscissors-ingame.png';
import ProjectModal from './Modal';

export default function RockPaperScissors() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  const RockPaperScissorsInfos = [
    {
      projectTitle: 'Rock, Paper, Scissors',
      pic1: RpsStart,
      pic1description: 'rock, paper, scissors start screen',
      pic2: RpsInGame,
      pic2description: 'rock, paper, scissors in game screen',
      pic3: RpsDesktop,
      pic3description: 'rock,paper,scissors final screen',
      pic4: '',
      pic4description: '',
      github_link: 'https://github.com/FlyingMoe91/rock-paper-scissor',
      vercel_link: 'https://flyingmoe91.github.io/rock-paper-scissor/',
      intro:
        'Rock, Paper, Scissors was my first big javascript project I coded out of my head with the help of the online platform "the odin project."',
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
      <LogbuddyImageMobile src={RpsDesktop} alt='rock, paper, scissors' />
      {projectModalActive && (
        <ProjectModal
          onClose={handleProjectModal}
          projectInfos={RockPaperScissorsInfos}
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
  justify-content: space-evenly;
  align-items: center;
  gap: 5vw;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

const ProjectName = styled.h2`
  font-size: 1.6rem;

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
