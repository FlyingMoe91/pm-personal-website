import styled from 'styled-components';

export default function NavBar() {
  return (
    <Nav>
      <a href="#about">about</a>
      <a href="#bootcamp">skills</a>
      <a href="#interests-skills">interests</a>
    </Nav>
  );
}

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: red;
    margin: 5px;
  }
`;
