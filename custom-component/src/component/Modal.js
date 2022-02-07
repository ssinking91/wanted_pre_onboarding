import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  const [modal, setmodal] = React.useState(false);
  const modalOpen = () => {
    if (modal) {
      document.body.style.overflow = "unset"; // 스크롤 방지 해제
      setmodal(!modal);
    } else {
      document.body.style.overflow = "hidden"; //모달창 띄웠을 때 스크롤 방지
      setmodal(!modal);
    }
  };
  return (
    <>
      {modal ? (
        <ModalContainer>
          <ModalBackground>
            <ModalItem>
              <ModaClose
                onClick={() => {
                  modalOpen();
                }}
              >
                &#215;
              </ModaClose>
              <ModalContent>HELLO CODESTATES!</ModalContent>
            </ModalItem>
          </ModalBackground>
        </ModalContainer>
      ) : (
        ""
      )}

      <Container>
        <ModalButton
          onClick={() => {
            modalOpen();
          }}
        >
          Open Modal
        </ModalButton>
      </Container>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalItem = styled.div`
  width: 400px;
  height: 150px;
  border-radius: 30px;
  position: relative;
  background-color: white;
`;

const ModaClose = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  font-size: 25px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  width: 400px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #20d7ff;
  font-size: 25px;
`;

const Container = styled.div`
  width: 75%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 30px;
  background-color: #20d7ff;
  color: white;
  border: none;
  cursor: pointer;
`;
