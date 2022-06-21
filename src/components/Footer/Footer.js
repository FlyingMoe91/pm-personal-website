import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <p>©patrickmueller</p>
      <a href>privay notice</a>
      <a href>imprint</a>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;

  a {
    margin: 15px;
  }
`;
