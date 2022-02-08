import React from "react";
import styled from "styled-components";

export const DropDown = (props) => {
  return (
    <DropDownContainer>
      {props.options.map((item, idx) => {
        return (
          <li
            key={idx}
            onClick={() => props.clickSelecte(item)}
            className={props.selected === idx ? "selected" : ""}
          >
            {item}
          </li>
        );
      })}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  font-size: 16px;
  z-index: 3;

  > li:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  > li {
    padding: 0 1rem;

    &.selected {
      background-color: lightgray;
    }
  }
`;

export const Autocomplete = () => {
  const theOptions = [
    "rustic",
    "antique",
    "vintage",
    "refurbished",
    "신품",
    "빈티지",
    "중고A급",
    "골동품",
  ];
  const [isVl, setVl] = React.useState(false);
  const [isinputVl, setInputVl] = React.useState("");
  const [options, setOptions] = React.useState(theOptions);
  const [selected, setSelected] = React.useState(-1);

  React.useEffect(() => {
    if (isinputVl === "") {
      setVl(false);
      setOptions([]); //option은 빈배열로 만들어서 아래에 리스트가 나타나지 않도록 구현
    }

    if (isinputVl !== "") {
      setOptions(
        theOptions.filter((items) => {
          return items.includes(isinputVl);
        })
      );
    }
  }, [isinputVl]);

  const changeInput = (e) => {
    setInputVl(e.target.value);
    setVl(true);
  };

  const deleteBtn = () => {
    setInputVl("");
  };

  const clickSelecte = (option) => {
    setInputVl(option);
    setVl(false);
  };

  const KeyUpSelecte = (e) => {
    if (isVl) {
      if (e.key === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      //options.length에 -1을 해주는 이유는 selected의 최대값을 맞춰주기 위해서이다.
      //예를들어 밑에 option이 2개가 나왔다고 가정했을 때, selected값이 최대 1까지 변할 수 있게 해줘야한다.
      //'ArrowDown'키를 누르면 selected는 0이 되고, 한번 더 누르면 1이 되고, 그 다음은 더이상 옵션이 없기 때문에 키가 안먹히게 해주는 것이다.

      if (e.key === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (e.key === "Enter" && selected >= 0) {
        //Enter키로 option 선택
        clickSelecte(options[selected]);
        setSelected(-1); //Enter키를 눌러서 선택이 되면 다시 selected는 -1이 되야한다.
      }
    }
  };

  return (
    <div className="autocomplete-wrapper">
      <InputContainer isVl={isVl}>
        <input
          type="text"
          value={isinputVl}
          onChange={changeInput}
          onKeyUp={KeyUpSelecte}
        ></input>
        <div className="delete-button" onClick={deleteBtn}>
          &times;
        </div>
      </InputContainer>

      {isVl && (
        <DropDown
          options={options}
          clickSelecte={clickSelecte}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Autocomplete;

const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${(props) =>
    props.isVl ? "1rem 1rem 0 0" : "1rem 1rem 1rem 1rem"};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;
