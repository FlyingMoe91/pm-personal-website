import styled from 'styled-components';
import HTML5 from './Icons/html5-original.svg';
import CSS3 from './Icons/css3-original.svg';
import JS from './Icons/javascript-original.svg';
import React from './Icons/react-original.svg';
import Jest from './Icons/jest-plain.svg';
import Git from './Icons/git-original.svg';
import Github from './Icons/github-original.svg';
import VSC from './Icons/vscode-original.svg';
import SB from './Icons/storybook-original.svg';
import ESLint from './Icons/eslint-original.svg';
import MongoDB from './Icons/mongodb-original-wordmark.svg';
import Bootstrap from './Icons/bootstrap-original.svg';
import CodePen from './Icons/codepen-plain.svg';
import Figma from './Icons/figma-original.svg';
import Nodejs from './Icons/nodejs-original.svg';

export default function Bootcamp() {
  return (
    <SkillsWrapper>
      <TopLine />
      <h2>my tech stack</h2>
      <IconBox>
        <img src={HTML5} alt="html5" />
        <img src={CSS3} alt="css3" />
        <img src={JS} alt="javascript" />
        <img src={React} alt="react" />
        <img src={Jest} alt="jest" />
        <img src={Git} alt="git" />
        <img src={Github} alt="github" />
        <img src={VSC} alt="visual studio code" />
        <img src={SB} alt="storybook" />
        <img src={ESLint} alt="eslint" />
        <img src={Nodejs} alt="nodejs" />
        <img src={MongoDB} alt="mongoDB" />
        <img src={Bootstrap} alt="bootstrap" />
        <img src={CodePen} alt="codepen" />
        <img src={Figma} alt="figma" />
      </IconBox>
      <BottomLine />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.section`
  background: #cdf2f2;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding: 40px;
  height: 450px;
  scroll-snap-align: center;

  img {
    width: 40px;
  }
`;

const IconBox = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  img {
    margin: auto;
  }
`;

const TopLine = styled.div`
  width: 1px;
  height: 6vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
`;

const BottomLine = styled.div`
  width: 1px;
  height: 4vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
`;
