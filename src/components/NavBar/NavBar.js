import styled from 'styled-components';

export default function NavBar() {
  return (
    <Nav>
      <a href="#about">about</a>
      <a href="#bootcamp">bootcamp</a>
      <a href="#before">before</a>
      <a href="#interests-skills">interests and skills</a>
      <a href="#contact">contact</a>
    </Nav>
  );
}

const Nav = styled.nav`
  margin-top: 10px;

  a {
    text-decoration: none;
    color: white;
    margin: 10px;
  }
`;
