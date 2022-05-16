import styled from 'styled-components';
import {
  FaGithubSquare as GithubIcon,
  FaLinkedin as LinkedInIcon,
} from 'react-icons/fa';
import { MdEmail as MailIcon } from 'react-icons/md';

export default function NavBar() {
  return (
    <Nav>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/FlyingMoe91"
      >
        <GithubIcon />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/patrick-müller-94a668239/"
      >
        <LinkedInIcon />
      </a>
      <a href="mailto:p.moe.mueller@gmail.com">
        <MailIcon />
      </a>
    </Nav>
  );
}

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: white;
    margin: 4vw;
    font-size: 3rem;

    @media screen and (min-width: 1024px) {
      color: lightgrey;
    }
  }
`;
