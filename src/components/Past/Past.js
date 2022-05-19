import styled from 'styled-components';

import FarmPic from '../../images/Farm.png';
import twentyOneMT from '../../images/21MT.png';
import DM from '../../images/DM.png';
import WDW from '../../images/wdw.png';
import AfterKaufland from '../../images/AfterKaufland.png';
export default function About() {
  return (
    <Wrapper>
      <TopLine />
      <p>
        In the past years I've been everywhere and nowhere, working in big
        cities and on tiny islands, for huge companies and little shops, on land
        and under water. It's been a journey and it's not over yet.
      </p>
      <JobContainer>
        <JobDivLeft>
          <p>
            Using the break to hide from the sun under a massive tree on a
            vinyard in South Australia.
          </p>
          <JobImages src={FarmPic} alt="myself on a farm" />
        </JobDivLeft>
        <JobDivRight>
          <JobImages src={twentyOneMT} alt="myself underground" />
          <p>Searching for the way out of an underground maze in Sydney.</p>
        </JobDivRight>
        <JobDivLeft>
          <p>Just me beeing aquaman and trying to breath under water.</p>
          <JobImages src={DM} alt="myself as divemaster" />
        </JobDivLeft>
        <JobDivRight>
          <JobImages
            src={AfterKaufland}
            alt="myself drinking a fresh coconut"
          />
          <p>
            After years working with fruits and veggies it was time to leave and
            try them very fresh myself.
          </p>
        </JobDivRight>
        <JobDivLeft>
          <p>Beeing a happy young man at the happiest place on earth.</p>
          <JobImages src={WDW} alt="myself working at world disney world" />
        </JobDivLeft>
      </JobContainer>
      <BottomLine />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  scroll-snap-align: center;
  width: 100vw;
  height: 100vh;
  padding: 30px 20px;
  text-align: center;
  font-weight: 300;
  color: #313035;

  p {
    font-size: 1.1rem;
  }
`;

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  width: 90vw;
  margin: 10px 0;

  p {
    font-size: 0.9rem;
    width: 250px;
  }
`;

const JobDivLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 5px 0;
  text-align: right;
`;

const JobDivRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 5px 0;
  text-align: left;
`;

// const JobDiv = styled.div`
//   display: flex;
//   width: 90vw;
//   justify-content: space-between;
//   align-items: center;
//   margin: 10px 0;
//   text-align: left;

//   p {
//     width: 250px;
//     font-size: 0.9rem;
//   }
// `;

const JobImages = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const TopLine = styled.div`
  width: 1px;
  height: 4vh;
  background: grey;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
`;

const BottomLine = styled.div`
  width: 1px;
  height: 4vh;
  background: grey;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
`;
