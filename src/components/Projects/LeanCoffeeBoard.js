import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import leanCoffeeBoard from '../../images/projects/lean-coffee-board/LeanCoffeeBoard.png';
import leanCoffeeBoardLog from '../../images/projects/lean-coffee-board/LeanCoffeeBoardLog.png';
import ProjectModal from './Modal';

export default function LeanCoffeeBoard() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  const leanCoffeeBoardInfos = [
    {
      projectTitle: 'Lean Coffee Board',
      pic1: leanCoffeeBoardLog,
      pic1description: 'lean coffee board login',
      pic2: '',
      pic2description: '',
      pic3: leanCoffeeBoard,
      pic3description: 'lean coffee board mainpage',
      pic4: '',
      pic4description: '',
      github_link: 'https://github.com/FlyingMoe91/lean-coffee-board',
      vercel_link: 'http://lean-coffee-board-sandy.vercel.app/',
      intro:
        'Lean Coffee Board was one of my last projects during my bootcamp at neuefische',
      description1:
        'Everyone with a the link can enter the board with their name and share information, ideas or other important notes on the board.',
      description2: '',
      techstack:
        ' React, React Testing Library, Jest, Styled Components, Storybook, Serverless Functions, Vercel API, Node.js, MongoDB Atlas, Mongoose',
    },
  ];

  return (
    <ProjectSlide id='leanCoffeeBoard'>
      <div>
        <ProjectName>Lean Coffee Board</ProjectName>
        <AboutButton onClick={handleProjectModal}>about this app</AboutButton>
      </div>
      <LogbuddyImageMobile src={leanCoffeeBoard} alt='lean coffee board' />
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
  justify-content: space-evenly;
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
