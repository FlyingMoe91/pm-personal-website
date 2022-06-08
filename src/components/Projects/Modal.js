import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';

export default function ProjectModal({ onClose, logbuddyInfos }) {
  return (
    <Background>
      {logbuddyInfos.map(
        ({
          projectTitle,
          pic1,
          pic2,
          pic3,
          pic4,
          pic1description,
          pic2description,
          pic3description,
          pic4description,
          github_link,
          vercel_link,
          intro,
          description1,
          description2,
          techstack,
        }) => (
          <ModalContent key={projectTitle}>
            <ButtonClose onClick={onClose}>
              <GrFormClose />
              <ScreenReaderOnly>close</ScreenReaderOnly>
            </ButtonClose>
            <ProjectHeadline>{projectTitle}</ProjectHeadline>
            <ContentGrid>
              <Screenshots src={pic1} alt={pic1description} />
              <div>
                <p>{intro}</p>
                <a target='_blank' rel='noreferrer' href={github_link}>
                  LogBuddy Repository
                </a>
                <a target='_blank' rel='noreferrer' href={vercel_link}>
                  LogBuddy Mobile-App
                </a>
              </div>
              <div>{description1}</div>
              <Screenshots src={pic3} alt={pic3description} />
              <Screenshots src={pic2} alt={pic2description} />
              <div>{description2}</div>
              <div>{techstack}</div>
              <Screenshots src={pic4} alt={pic4description} />
            </ContentGrid>
          </ModalContent>
        )
      )}
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 300;
`;

const ModalContent = styled.div`
  position: relative;
  padding: 0;
  margin: 15px auto;
  height: 95vh;
  width: 95vw;
  background-color: white;
  overflow: scroll;
  padding: 10px;
  background-color: #00687e;
  color: white;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  a {
    display: block;
    text-decoration: none;
    color: hotpink;
    font-weight: 500;
    margin: 10px 0;
  }
`;

const ProjectHeadline = styled.h3`
  font-size: 1.4rem;
`;

const ButtonClose = styled.button`
  position: fixed;
  right: 15px;
  top: 15px;
  font-size: 2rem;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const Screenshots = styled.img`
  width: 150px;
  background-color: #00687e;
`;
