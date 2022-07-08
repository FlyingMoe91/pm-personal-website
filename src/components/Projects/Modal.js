import styled from 'styled-components';
import { BsFillXCircleFill } from 'react-icons/bs';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';
import Button from '../Button/Button';

export default function ProjectModal({ onClose, projectInfos }) {
  return (
    <Background onClick={onClose}>
      {projectInfos.map(
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
              <CloseIcon />
              <ScreenReaderOnly>close</ScreenReaderOnly>
            </ButtonClose>
            <ProjectHeadline>{projectTitle}</ProjectHeadline>
            <ContentGrid>
              <Screenshots src={pic1} alt={pic1description} />
              <div>
                <p>{intro}</p>
                <ButtonLink target='_blank' rel='noreferrer' href={github_link}>
                  {projectTitle} Repository
                </ButtonLink>
                <ButtonLink target='_blank' rel='noreferrer' href={vercel_link}>
                  {projectTitle}
                </ButtonLink>
              </div>
              <div>{description1}</div>
              <Screenshots src={pic3} alt={pic3description} />
              <Screenshots src={pic2} alt={pic2description} />
              <div>{description2}</div>
              <div>Tech stack:{techstack}</div>
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
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 300;
`;

const ModalContent = styled.div`
  position: relative;
  margin: 15px auto;
  padding: 10px;
  height: 95vh;
  width: 95vw;
  background-color: #cdf2f2;
  overflow: scroll;
  border: 5px solid white;

  @media screen and (min-width: 769px) {
    width: 730px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;

const ProjectHeadline = styled.h3`
  font-size: 1.4rem;
`;

const ButtonLink = styled(Button)`
  display: block;
  font-size: 1rem;
  width: 80%;
  margin: 5px auto;
`;

const ButtonClose = styled.button`
  position: fixed;
  left: 30px;
  top: 35px;
  font-size: 2rem;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const CloseIcon = styled(BsFillXCircleFill)`
  color: white;
`;

const Screenshots = styled.img`
  width: 150px;
`;
