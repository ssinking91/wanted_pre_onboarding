import React from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleChange = (e) => {
    //<input type="checkbox">의 체크 여부를 확인하고 싶다면 event.target.checked를 사용
    setToggle(e.target.checked);
  };
  console.log(toggle);

  return (
    <Container>
      <Switch>
        <SwitchCheckbox
          type="checkbox"
          className="switchCheckbox"
          id="switchInput"
          onChange={toggleChange}
        />
        <SwitchLabel
          className="SwitchLabel"
          htmlFor="switchInput"
          // active={toggle}
        >
          <Switchball className="Switchball" />
        </SwitchLabel>
      </Switch>
      <SwitchText>Toggle Switch{toggle ? " on" : " off"}</SwitchText>
    </Container>
  );
};

export default Toggle;

const Container = styled.div`
  width: 75%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3% 0;
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const SwitchCheckbox = styled.input`
  display: none;
  &:checked + .SwitchLabel .Switchball {
    transform: translateX(30px);
  }
  &:checked + .SwitchLabel {
    background-position: left;
    background: linear-gradient(to right, #20D7FF 50%, #e9e9e9 50%) left;
    background-size: 200%;
    transition: all 0.3s linear;
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  width: 60px;
  height: 26px;
  border-radius: 50px;
  cursor: pointer;
  /* background-color:${(props) => (props.active ? "#20D7FF" : "#e9e9e9")}; */
  background-position: right;
  background: linear-gradient(to left, #e9e9e9 50%, #20D7FF 50%) right;
  background-size: 200%;
  transition: all 0.3s linear;
`;

const Switchball = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 3px;
  left: 5px;

  transition: transform 0.3s linear;

  background-color: white;
`;

const SwitchText = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
