import styled from 'styled-components';

export default function Bootcamp() {
  return (
    <SkillsWrapper>
      <Line />
      <h2>my tech stack</h2>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.section`
  position: relative;
  text-align: center;
  padding: 20px;
`;

const Line = styled.div`
  width: 1px;
  height: 4vh;
  background: black;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
`;
