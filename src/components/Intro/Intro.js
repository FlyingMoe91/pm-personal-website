import styled from 'styled-components';
import IntroPic from '../../images/intro-pic.png';
import ButtonToContact from '../ButtonsToContact/ButtonToContact';
import { BsHandIndexThumb } from 'react-icons/bs';

export default function Intro() {
  return (
    <Wrapper id='intro'>
      <IntroMain>
        <IntroText>
          <p>
            My name is <span>Patrick</span> <span>Müller</span>. I'm a 30year
            old <span>junior</span> <span>frontend</span> <span>developer</span>{' '}
            from Berlin, Germany. A year ago I started teaching myself web
            development with online courses and websites for about half a year
            and continued with a three month <span>bootcamp</span>{' '}
            <span>at</span>{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.neuefische.de/'
            >
              <span>neuefische</span>
            </a>
            . I'm still at the beginning of my new journey, but I can't wait to
            make my next steps.
          </p>
          <ButtonToContact href='#contact'>
            No more words needed!
            <IconHand />
          </ButtonToContact>
        </IntroText>
        <IntroImage src={IntroPic} alt='myself' />
      </IntroMain>
      <Line />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding-bottom: 0;
  color: #313035;
  line-height: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (min-width: 481px) {
    line-height: 2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const IntroMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 30px 0;

  p {
    margin: 0 0 50px 0;
  }

  a {
    text-decoration: none;
  }

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

const IntroText = styled.div`
  width: 70vw;
  font-weight: 300;
  text-align: justify;

  @media screen and (min-width: 480px) {
    width: 50vw;
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const IconHand = styled(BsHandIndexThumb)`
  position: absolute;
  right: -15px;
  bottom: -15px;
  color: grey;
  font-size: 3rem;
  transform: rotate(-35deg);
`;

const IntroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(70%);

  @media screen and (min-width: 1025px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 400px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 5vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
`;
