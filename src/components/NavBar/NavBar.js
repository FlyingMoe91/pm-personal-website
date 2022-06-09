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
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/FlyingMoe91'
      >
        <GithubIcon />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/patrick-müller-94a668239/'
      >
        <LinkedInIcon />
      </a>
      <a href='mailto:p.moe.mueller@gmail.com'>
        <MailIcon />
      </a>
    </Nav>
  );
}

const Nav = styled.nav`
  text-align: center;
  display: flex;
  justify-content: space-around;
  font-size: 3rem;
  padding: 20px;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 960px) {
    width: 960px;
    font-size: 4rem;
  }
`;
