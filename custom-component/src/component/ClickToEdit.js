import React from "react";
import styled from "styled-components";

export const InputBox = (props) => {
  const inputRef = React.useRef(null);
  const [isEdit, setEdit] = React.useState(false);
  const [newValue, setNewValue] = React.useState(props.value);

  // blur() : 선택요소에서 포커스 제거.
  // focus() : 선택요소가 포커스 될 때 지정 함수 실행.
  // onfocus : 포커스를 받은 경우 이벤트 설정
  // onblur : 포커스가 해지될 때 이벤트 설정

  React.useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleBlur = () => {
    setEdit(false);
    props.editChange(newValue);
  };

  const handleClick = () => {
    setEdit(true);
  };

  return (
    <EditBox isEdit={isEdit}>
      {isEdit ? (
        <EditInput
          type="text"
          ref={inputRef}
          value={newValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </EditBox>
  );
};

const EditBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border: 1px #e9e9e9 solid;
  border-radius: 3px;
  margin-left: 1rem;
`;

const EditInput = styled.input`
  text-align: center;
  width: 150px;
  height: 30px;
  border: none;
  &:focus {
    border-radius: 3px;
    outline: 1.5px #20d7ff solid;
  }
`;
// outline 속성은 border 바깥 영역에 생기는 외곽선

export const ClickToEdit = () => {
  const info = {
    name: "신코딩",
    age: 31,
  };

  const [name, setName] = React.useState(info.name);
  const [age, setAge] = React.useState(info.age);

  return (
    <EditContainer>
      <EditItem>
        <label>이름</label>
        <InputBox value={name} editChange={(e) => setName(e)} />
      </EditItem>
      <EditItem>
        <label>나이</label>
        <InputBox value={age} editChange={(e) => setAge(e)} />
      </EditItem>
      <EditItem>
        <div className="contents">
          이름 : {name} / 나이 : {age}
        </div>
      </EditItem>
    </EditContainer>
  );
};
export default ClickToEdit;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EditItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem;
`;
