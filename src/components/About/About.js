import styled from 'styled-components';
import aboutMePic from '../../images/aboutMe.png';

export default function About() {
  return (
    <AboutWrapper>
      <AboutText>
        <p>Hey guys, welcome to my page!</p>
        <p>My name is Patrick Müller, 30years old from Berlin, Germany</p>
        <p>
          I recently finished a web-development bootcamp with{' '}
          <a href="https://www.neuefische.de/">neuefische</a> and now I'm on my
          way now to be the developer you're looking for.
        </p>
      </AboutText>
      <AboutImage src={aboutMePic} alt="myself" />
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  text-align: center;
  background-color: #b59799;
  color: white;
`;

const AboutText = styled.div`
  width: 50vw;
`;

const AboutImage = styled.img`
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  object-fit: cover;
`;
