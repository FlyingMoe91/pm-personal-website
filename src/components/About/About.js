import styled from 'styled-components';
import aboutMePic from '../../images/aboutMe.png';

export default function About() {
  return (
    <AboutWrapper>
      <AboutIntro>
        <AboutIntroText>
          <p>
            My name is <span>Patrick</span>
            <span> Müller</span>. I'm a 30year old <span> junior</span>
            <span> frontend</span>
            <span> developer</span> from Berlin, Germany. A year ago I started
            teaching myself web development with online courses and websites for
            about half a year and continued with a three month
            <span>bootcamp</span>
            <span> at</span>
            <span>
              <a href="https://www.neuefische.de/"> neuefische</a>
            </span>
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
  height: 100vh;
  padding: 20px;
  padding-bottom: 0;
  color: #313035;
  text-align: center;
  line-height: 1.5rem;

  @media screen and (min-width: 768px) {
    line-height: 2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const AboutIntro = styled.div`
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

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const AboutIntroText = styled.div`
  width: 75vw;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    width: 60vw;
    line-height: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 15vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
`;
