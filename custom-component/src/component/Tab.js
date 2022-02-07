import React from "react";
import styled from "styled-components";

const Tab = (props) => {
  const [tabIndex, setIndex] = React.useState(0); // TabContent 변경
  const tabLabel = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];

  const tabChange = (e) => {
    setIndex(e);
  };
  //console.log(tabLabel.length)
  return (
    <Container>
      <Tabs>
        {tabLabel.map((item, idx) => {
          return (
            <TabsItem
              key={idx}
              length={tabLabel.length}
              active={tabIndex === idx ? true : false}
              onClick={() => {
                tabChange(idx);
              }}
            >
              {tabLabel[idx].name}
            </TabsItem>
          );
        })}
      </Tabs>
      <TabContent>{tabLabel[tabIndex].content}</TabContent>
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 75%;
  height: 20%;
  display: flex:
  align-items: center;
  margin: 3% 0;
`;

const Tabs = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: #e9e9e9;
`;

const TabsItem = styled.div`
  width:${(props) => (props.length ? `calc(100%/${props.length})` : "100%")};
  /* width: calc(100% / 3); */
  height: 100%;
  min-height: 50px;
  line-height: 50px;
  padding-left: 10px;
  color: ${(props) => (props.active ? "white" : "")};
  background-color: ${(props) => (props.active ? "#20D7FF" : "")};
  transition: 0.1s linear;
  &:hover {
    cursor: pointer;
  }
`;

const TabContent = styled.div`
  width: 100%;
  height: 70%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
