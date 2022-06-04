import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import ScreenReaderOnly from '../Utilities/ScreenReaderOnly';

export default function ProjectModal({ onClose }) {
  return (
    <Background>
      <Modal>
        <ButtonClose onClick={onClose}>
          <GrFormClose />
          <ScreenReaderOnly>close</ScreenReaderOnly>
        </ButtonClose>
      </Modal>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 300;
  overflow: hidden;
`;

const Modal = styled.div`
  padding: 0;
  margin: auto;
  height: 95vh;
  width: 95vw;
  background-color: white;
`;

const ButtonClose = styled.button`
  font-size: 2rem;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 0;
`;
