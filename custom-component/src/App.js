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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
