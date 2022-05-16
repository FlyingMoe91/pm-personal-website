import styled from 'styled-components';
import headerPic from '../../images/header-pic.png';
import Logbuddy from './Logbuddy';

export default function Projects() {
  return (
    <ProjectsWrapper>
      <TopLine />
      <ProjectList>
        <li>
          <ProjectSlide>
            <div>
              <ProjectName>my projects</ProjectName>
            </div>
          </ProjectSlide>
        </li>
        <li>
          <Logbuddy />
        </li>
        <BottomLine />
      </ProjectList>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;
  overflow-x: scroll;
  scroll-snap-align: center;
  line-height: 1.5rem;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  overflow: scroll hidden;
  scroll-snap-type: x mandatory;

  li {
    scroll-snap-align: center;
  }
`;

const ProjectSlide = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;

  div {
    background: url(${headerPic}) 20% 48% no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
`;

const ProjectName = styled.h2`
  color: #de3612;
  font-size: 2rem;
  margin: 0;
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
