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
      <h2>my tech stack</h2>
      <IconBox>
        <img src={HTML5} alt='html5' />
        <img src={CSS3} alt='css3' />
        <img src={JS} alt='javascript' />
        <img src={React} alt='react' />
        <img src={Jest} alt='jest' />
        <img src={Git} alt='git' />
        <img src={Github} alt='github' />
        <img src={VSC} alt='visual studio code' />
        <img src={SB} alt='storybook' />
        <img src={ESLint} alt='eslint' />
        <img src={Nodejs} alt='nodejs' />
        <img src={MongoDB} alt='mongoDB' />
        <img src={Bootstrap} alt='bootstrap' />
        <img src={CodePen} alt='codepen' />
        <img src={Figma} alt='figma' />
      </IconBox>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.section`
  background: #cdf2f2;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding: 50px;

  img {
    width: 40px;
  }

  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1025px) {
    img {
      width: 80px;
    }
  }
`;

const IconBox = styled.div`
  width: 60vw;
  margin: 30px auto 30px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  img {
    margin: auto;
  }
`;
