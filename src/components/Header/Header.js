import styled from 'styled-components';
import headerPic from '../../images/header-pic.png';
import NavBar from '../NavBar/NavBar';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ButtonToContact from '../ButtonsToContact/ButtonToContact';
import { BsHandIndexThumb } from 'react-icons/bs';

export default function Header() {
  return (
    <HeaderWrapper>
      <NavBar />
      <HeaderContent>
        <HeaderText>
          HI, I'M PATRICK. A JUNIOR WEB DEVELOPER FROM GERMANY.
        </HeaderText>
      </HeaderContent>
      <AboutMeArrow href='#intro'>
        intro
        <ArrowIcon />
      </AboutMeArrow>
      <ToContact href='#contact'>
        I want this guy already! <IconHand />
      </ToContact>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background: url(${headerPic}) 15% 50% no-repeat;
  background-size: auto;
  height: 100vh;

  @media screen and (min-width: 960px) {
    background-size: auto;
    background-position: left top;
  }
`;

const HeaderContent = styled.div`
  float: right;
  width: 70%;
  padding: 10px;
  margin-top: 120px;

  @media screen and (min-width: 1024px) {
    width: 50%;
    margin: 0;
  }

  @media screen and (min-width: 1430px) {
    margin-top: 120px;
  }
`;

const HeaderText = styled.h1`
  background-color: white;
  font-size: 1.5rem;
  text-align: center;
  color: #de3612;
  padding: 20px;
  margin: auto;
  transition: 0.8s;

  @media screen and (min-width: 769px) {
    font-size: 2.5rem;
    width: 80%;
  }

  @media screen and (min-width: 1025px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1201px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1700px) {
    margin-top: 60px;
  }
`;

const ToContact = styled(ButtonToContact)`
  font-size: 1.2rem;
  position: absolute;
  bottom: 5vh;
  left: 10vw;

  @media screen and (min-width: 481px) {
    font-size: 1.5rem;
    bottom: 5vh;
    left: 20vw;
  }

  @media screen and (min-width: 769px) {
    font-size: 2rem;
    bottom: 5vh;
    left: 25vw;
  }

  @media screen and (min-width: 960px) {
    bottom: 5vh;
    left: 320px;
  }
`;

const IconHand = styled(BsHandIndexThumb)`
  position: absolute;
  right: -15px;
  bottom: -15px;
  color: white;
  font-size: 2rem;
  transform: rotate(-35deg);
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
