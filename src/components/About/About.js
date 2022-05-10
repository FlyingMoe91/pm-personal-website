import styled from 'styled-components';
import aboutMePic from '../../images/aboutMe.png';

export default function About() {
  return (
    <AboutWrapper>
      <AboutIntro>
        <AboutIntroText>
          <p>Welcome to my page!</p>
          <p>My name is Patrick Müller, 30years old from Berlin, Germany.</p>
          <p>
            I recently finished a web-development bootcamp with{' '}
            <a href="https://www.neuefische.de/">neuefische</a> and now I'm on
            my way to be the developer you're looking for.
          </p>
          <LinkToBootcamp href="#bootcamp">
            more about the bootcamp
          </LinkToBootcamp>
        </AboutIntroText>
        <AboutImage src={aboutMePic} alt="myself" />
      </AboutIntro>
      <p>
        My location-independent life in the past three years gave me a new
        perspective on the subject work. Thanks to an online
        masterclass(fullstack) I realized new chances for myself. Coding allows
        me to continue to be independent but also to grow in a team. I can
        implement diverse projects and see the results straight away.
      </p>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  background-color: #b59799;
  padding: 20px;
  color: white;
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

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const AboutIntroText = styled.div`
  width: 80vw;

  p {
    margin-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    width: 60vw;
    line-height: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const LinkToBootcamp = styled.a`
  text-decoration: none;
  border: 1px solid white;
  border-radius: 5px;
  padding: 2px;
  color: white;
  font-size: 0.8rem;
`;
