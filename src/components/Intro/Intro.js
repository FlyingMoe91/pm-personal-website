import styled from 'styled-components';
import aboutMePic from '../../images/aboutMe.png';

export default function About() {
  return (
    <AboutWrapper id="about">
      <AboutIntro>
        <AboutIntroText>
          <p>
            My name is <span>Patrick</span> <span>Müller</span>. I'm a 30year
            old <span>junior</span> <span>frontend</span> <span>developer</span>{' '}
            from Berlin, Germany. A year ago I started teaching myself web
            development with online courses and websites for about half a year
            and continued with a three month
            <span>bootcamp</span> <span>at</span>{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.neuefische.de/"
            >
              <span>neuefische</span>
            </a>
            . I'm still at the beginning of my new journey, but I can't wait to
            make my next steps.
          </p>
        </AboutIntroText>
        <AboutImage src={aboutMePic} alt="myself" />
      </AboutIntro>
      <Line />
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  position: relative;
  height: 90vh;
  padding-bottom: 0;
  color: #313035;
  text-align: center;
  line-height: 1.5rem;
  scroll-snap-align: center;

  @media screen and (max-width: 481px) {
    height: 100vh;
  }

  @media screen and (min-width: 481px) {
    line-height: 2rem;
    height: 60vh;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const AboutIntro = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

  span {
    position: relative;
    z-index: 1;

    ::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 0.6rem;
      width: 100%;
      background: #cdf2f2;
      z-index: -1;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 5vh;
  }
`;

const AboutIntroText = styled.div`
  width: 70vw;
  font-size: 1rem;
  font-weight: 300;
  text-align: left;

  @media screen and (min-width: 480px) {
    width: 50vw;
    line-height: 2rem;
  }

  @media screen and (min-width: 1025px) {
    font-size: 1.3rem;
  }
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(70%);
  transition: 0.8s;

  @media screen and (min-width: 1025px) {
    width: 300px;
    height: 300px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 10vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
`;
