import styled from 'styled-components';

import FarmPic from '../../images/Farm.png';
import twentyOneMT from '../../images/21MT.png';
import DM from '../../images/DM.png';
import WDW from '../../images/wdw.png';
export default function About() {
  return (
    <Wrapper>
      <TopLine />
      <h2>MORE ABOUT ME, MYSELF AND I</h2>
      <DescriptionPast>
        In the past years I've been everywhere and nowhere, working in big
        cities and on tiny islands, for huge companies and little shops, on land
        and under water. It's been a journey and it's not over yet.
      </DescriptionPast>
      <JobContainer>
        <DivOdd>
          <JobImages src={FarmPic} alt="myself on a farm" />
          <p>
            Using the break to hide from the sun under a massive tree on a
            vinyard in South Australia.
          </p>
        </DivOdd>
        <DivEven>
          <p>Searching for the way out of an underground maze in Sydney.</p>
          <JobImages src={twentyOneMT} alt="myself underground" />
        </DivEven>
        <DivOdd>
          <JobImages src={DM} alt="myself as divemaster" />
          <p>Just me beeing aquaman and trying to breath under water.</p>
        </DivOdd>
        <DivEven>
          <p>
            Beeing a happy young man at the happiest place on earth. World
            Disney World!
          </p>
          <JobImages src={WDW} alt="myself working at world disney world" />
        </DivEven>
      </JobContainer>
      <BottomLine />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  padding: 30px 20px;
  text-align: center;
  font-weight: 300;
  color: #313035;

  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

const DescriptionPast = styled.p`
  font-size: 1.1rem;

  @media screen and (min-width: 480px) {
    width: 50vw;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1201px) {
    font-size: 2rem;
    width: 50vw;
    margin: 0 auto;
  }
`;

const JobContainer = styled.div`
  width: 90vw;
  margin: 10px auto;
`;

const DivOdd = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  text-align: center;

  p {
    width: 200px;
    font-size: 0.9rem;
    text-align: justify;
    padding: 10px;
    margin: 0;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  @media screen and (min-width: 480px) {
    p {
      font-size: 1.1rem;
      width: 300px;
    }
  }

  @media screen and (min-width: 1201px) {
    margin-bottom: -100px;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    p {
      width: 600px;
      font-size: 1.8rem;
    }
  }
`;

const DivEven = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  text-align: center;

  p {
    width: 200px;
    font-size: 0.9rem;
    text-align: justify;
    padding: 10px;
    margin: 0;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  @media screen and (min-width: 480px) {
    p {
      font-size: 1.1rem;
      width: 300px;
    }
  }

  @media screen and (min-width: 1201px) {
    margin-bottom: -100px;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    p {
      width: 600px;
      font-size: 1.8rem;
    }
  }
`;

const JobImages = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media screen and (min-width: 1201px) {
    width: 20%;
    height: 20%;
  }
`;

const TopLine = styled.div`
  width: 1px;
  height: 4vh;
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
