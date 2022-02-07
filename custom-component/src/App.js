import './App.css';
import styled from "styled-components";
import { AutoComplete, ClickToEdit, Modal, Tab, Tag, Toggle } from './component/index'

function App() {
  return (
    <Container>
      <Tab />
      <Modal />
      <Toggle />
      <Tag />
      <ClickToEdit/>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
