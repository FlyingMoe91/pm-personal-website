import styled from 'styled-components';
import headerPic from '../../images/header-pic.png';
import NavBar from '../NavBar/NavBar';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <NavBar />
        <Headline>
          HI, I'M PATRICK. A JUNIOR WEB DEVELOPER FROM GERMANY.
        </Headline>
      </HeaderContent>
      <AboutMeArrow href='#intro'>
        intro
        <ArrowIcon />
      </AboutMeArrow>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background: url(${headerPic}) 15% 50% no-repeat;
  background-size: auto;
  height: 100vh;

  @media screen and (min-width: 1024px) {
    background-size: auto;
    background-position: left top;
  }
`;

const HeaderContent = styled.div`
  float: right;
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15vh;
  padding: 5vw;

  @media screen and (min-width: 1024px) {
    width: 50%;
    padding: 2vw;
  }
`;

const Headline = styled.h1`
  background-color: white;
  font-size: 6vw;
  text-align: center;
  color: #de3612;
  padding: 20px;
  transition: 0.8s;

  @media screen and (min-width: 1024px) {
    font-size: 4vw;
    width: 80%;
    text-justify: center;
  }
`;

const AboutMeArrow = styled.a`
  width: 80px;
  border: none;
  background: transparent;
  position: absolute;
  right: -15px;
  bottom: 60px;
  color: lightgrey;
  transform: rotate(90deg);
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    left: 900px;
    right: 0;
  }
`;

const ArrowIcon = styled(HiOutlineArrowNarrowRight)`
  font-size: 1.5rem;
`;
