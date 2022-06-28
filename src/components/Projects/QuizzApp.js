import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import QuizzAppMobile from '../../images/projects/quizzApp/QuizzApp.png';
import QuizzApp1 from '../../images/projects/quizzApp/QuizzApp1.png';
import QuizzApp2 from '../../images/projects/quizzApp/QuizzApp2.png';
import QuizzApp3 from '../../images/projects/quizzApp/QuizzApp3.png';
import QuizzApp4 from '../../images/projects/quizzApp/QuizzApp4.png';

import ProjectModal from './Modal';

export default function QuizzApp() {
  const [projectModalActive, setProjectModalActive] = useState(false);

  const quizzAppInfos = [
    {
      projectTitle: 'Quizz App',
      pic1: QuizzApp1,
      pic1description: '',
      pic2: QuizzApp2,
      pic2description: '',
      pic3: QuizzApp3,
      pic3description: '',
      pic4: QuizzApp4,
      pic4description: '',
      github_link: 'https://github.com/FlyingMoe91/quiz-app',
      vercel_link: 'http://quiz-app-one-theta.vercel.app/',
      intro: '',
      description1: '',
      description2: '',
      techstack: '',
    },
  ];

  return (
    <ProjectSlide id='quizzApp'>
      <div>
        <ProjectName>Quizz App</ProjectName>
        <AboutButton onClick={handleProjectModal}>about this app</AboutButton>
      </div>
      <MobileMainPic src={QuizzAppMobile} alt='quizz app' />
      {projectModalActive && (
        <ProjectModal
          onClose={handleProjectModal}
          projectInfos={quizzAppInfos}
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

const MobileMainPic = styled.img`
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
