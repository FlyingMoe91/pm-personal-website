import styled from 'styled-components';
import headerPic from '../../images/header-pic.png';
import NavBar from '../NavBar/NavBar';

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <NavBar />
        <Headline>
          Hi, I'm Patrick. A junior web developer from germany.
        </Headline>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: url(${headerPic}) 20% 48% no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Headline = styled.h1`
  width: 50vw;
  font-size: 6vw;
  line-height: 2;
  margin: 0 10vw 5vh 0;
  color: #de3612;
`;
