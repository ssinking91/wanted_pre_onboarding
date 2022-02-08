## Wanted Pre Onboarding 🔥

### 1. Toggle Component

<img src="https://user-images.githubusercontent.com/89959952/152770100-728dea08-b000-45c0-a2b9-61df3a8bb863.gif" width="500px" height="300px" title="Toggle" alt="Toggle"></img><br/>

### 구현 방법 🧁.

> 1. 리렌더링시에 인라인 스타일이 적용된 컴포넌트와 HTML 태그가 돔을 새로 그리게 되어 불필요한 리로딩이 발생 및 style 속성의 재사용성이 떨어져 `styled component` 사용
> 2. 부모 자식의 관계에 있는 컴포넌트 간에 상태나 특정 값을 전달하기 위해 사용하기위해 `props`를 사용
> 3. setState를 이용해서 값을 변화시키며, state가 변경되면 컴포넌트가 다시 렌더링되는 `useState(Hooks)` 사용
> 4. JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없으므로 `{ } 안에서 삼항연산자(조건부 연산자)`를 사용
> 5. html에서 두가지 선택지로 반복하는 대표적인 태그는 체크박스 `<input type="checkbox">` 사용
> 6. checkbox 스타일링하기 위해 label(라벨)사용

<br />

### Error Handling Log 🍭.

> 스위치 볼이 이동함에 따라 바뀌는 배경색 변화가 어려웠음
> 처음 시작은 <SwitchLabel>의 배경색을 toggle 값의 변화에 따라 한 번에 바뀌겠끔 props로 넘겨줘서 배경색을 바꿨음

```javaScript
       background-color:${(props) => (props.active ? "#20D7FF" : "#e9e9e9")};
```

> 구글링과 MDN문서를 찾아 linear-gradient을 적용하였음
> 하지만 배경색이 반반씩 밖에 변화하지 않아 background-size: 200%;를 줘서 <SwitchLabel>이 바뀔 때마다 배경색이 바뀌도록 하였음

```javaScript
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
```

### 자세한 실행 방법 🍦.

> 1. 속성 `type="checkbox"`에서 값이 true면 체크되고, toggle 값이 false면 체크해제 속성 이용
> 2. checked 값을 변경하기위해 onChange 속성 `onChange={toggleChange}`을 이용, toggleChange 이벤트 핸들러 함수를 사용 및 체크 값을 바꾸기 위해 `setToggle(e.target.checked);`를 사용허여서 toggle값을 바꿈
> 3. `type="checkbox"`에서 `:checked` 속성을 이용, linear-gradient와 transition을 활용하여 `<Switchball>`의 부드럽게 이동시킴
> 4. `{toggle ? " on" : " off"}` 값을 바꿈

<br /><br />

### 2. Modal Component

<img src="https://user-images.githubusercontent.com/89959952/152767930-3e43b730-6576-4099-af68-8c64c6797ade.gif" width="500px" height="300px" title="Modal" alt="Modal"></img><br/>

### 구현 방법 🧁.

> 1. 리렌더링시에 인라인 스타일이 적용된 컴포넌트와 HTML 태그가 돔을 새로 그리게 되어 불필요한 리로딩이 발생 및 style 속성의 재사용성이 떨어져 `styled component` 사용
> 2. 부모 자식의 관계에 있는 컴포넌트 간에 상태나 특정 값을 전달하기 위해 사용하기위해 `props`를 사용
> 3. setState를 이용해서 값을 변화시키며, state가 변경되면 컴포넌트가 다시 렌더링되는 `useState(Hooks)` 사용
> 4. JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없으므로 `{ } 안에서 삼항연산자(조건부 연산자)`를 사용
> 5. 모달창 띄웠을 때 스크롤 방지를 위해 `document.body.style.overflow = "hidden"`을 사용

<br />

### Error Handling Log 🍭.

> `<ModalContainer>`(부모요소)에 `position: relative` / `<ModalBackground>`(자식요소)에 `position: absolute`를 줬지만 브라우저 화면에 자식요소가 나타나지 않았음. 구글링 해보니

- `position:fixed`는
  - 스크롤이 내려가더라도 떠있는 header
  - modal
  - 오른쪽 하단에 항상 떠있는 floating 버튼
  - position:relative인 제일 가까운 부모 혹은 조상 요소가 아닌 브라우저 창이 기준
  - 지정한 위치에 고정하여 배치
- `position: absolute`는 - 특정 엘리먼트 내에서 다른 엘리먼트와 관계 없이 움직여야 하는 경우 - right값의 기준이 되는 위치는 가장 가까운 부모 요소면서 조상 요소 중 position 속성이 relative인 요소 - 원하는 위치를 지정해 배치
  > `<ModalBackground>` 자식요소에 `position: fixed;`를 주니 잘 해결 함

### 자세한 실행 방법 🍦.

> 1. `<ModalButton>` Click 이벤트 시 이벤트 핸들러 함수 modalOpen() 실행햐여 modal값을 바꿈
> 2. `const [modal, setmodal] = React.useState(false);`로 modal 값이 true면 화면 모달창 띄움, modal 값이 false면 화면 모달창 내림
> 3. `document.body.style.overflow`을 사용하여 모달창 띄웠을 때 스크롤 방지

<br /><br />

### 3. Tab Component

<img src="https://user-images.githubusercontent.com/89959952/152770611-5d33ce5f-b5b6-4e59-a7f5-f5a3e6c9e09d.gif" width="500px" height="300px" title="Tab" alt="Tab"></img><br/>

### 구현 방법 🧁.

> 1. 리렌더링시에 인라인 스타일이 적용된 컴포넌트와 HTML 태그가 돔을 새로 그리게 되어 불필요한 리로딩이 발생 및 style 속성의 재사용성이 떨어져 `styled component` 사용
> 2. 부모 자식의 관계에 있는 컴포넌트 간에 상태나 특정 값을 전달하기 위해 사용하기위해 `props`를 사용
> 3. setState를 이용해서 값을 변화시키며, state가 변경되면 컴포넌트가 다시 렌더링되는 `useState(Hooks)` 사용
> 4. JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없으므로 `{ } 안에서 삼항연산자(조건부 연산자)`를 사용
> 5. 객체 배열 `tabLabel`을 만든 후 `map()`함수를 사용하여 Tab 버튼을 만듦

<br />

### Error Handling Log 🍭.

> 객체 배열의 length값이 변화할때마다 Tab버튼의 사이즈를 균일하게 하기 위해 `length={tabLabel.length}`준다음

```JavaScript
 width:${(props) => (props.length ? `calc(100%/props.length)` : "100%")};
```

> 받아 `calc(100%/props.length)` 했지만 브라우저가 인식하지 못함

```JavaScript
 width:${(props) => (props.length ? `calc(100%/${props.length})` : "100%")};
```

> MDN문서를 찾아보니 `calc(100%/${props.length})`로 바꾸니 해결됨
> `템플릿 리터럴(Template Literal)` 사용시 `표현식 삽입(Expression interpolation)`에는 변수나 연산 등을 ${ } 사이에 삽입할 수 있음

### 자세한 실행 방법 🍦.

> 1. 객체 배열 tabLabel 생성 후 map() 함수를 사용하면 tap 버튼을 만들어 줌
> 2. `const [tabIndex, setIndex] = React.useState(0);` TabContent 변경을 하기 위해 onClick 시 이벤트 핸들러 함수 `tabChange(idx)`를 이용
> 3. tab 버튼 클릭 시 클릭 대상 배경색을 바꾸어 주기 위해 `active={tabIndex === idx ? true : false}`를 사용하여 props로 넘겨줌
> 4. tabIndex의 값이 바뀔 때마다 내용이 바뀌겠끔 {tabLabel[tabIndex].content}로 정의함

<br /><br />

### 4. Tag Component

<img src="https://user-images.githubusercontent.com/89959952/152770737-ff04b238-b78d-4d74-8b38-713cfeb7af50.gif" width="500px" height="300px" title="Tag" alt="Tag"></img><br/>

### 구현 방법 🧁.

> 1. 리렌더링시에 인라인 스타일이 적용된 컴포넌트와 HTML 태그가 돔을 새로 그리게 되어 불필요한 리로딩이 발생 및 style 속성의 재사용성이 떨어져 `styled component` 사용
> 2. setState를 이용해서 값을 변화시키며, state가 변경되면 컴포넌트가 다시 렌더링되는 `useState(Hooks)` 사용
> 3. 공백이 입력이 되지않게 해주기 위해 trim()함수 사용
> 4. 사용자가 키보드의 Enter키를 눌렀다가 땠을 때 이벤트가 발생하도록 하기위해 onKeyup() 함수 사용
> 5. 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 않기 위해 includes() 함수 사용

<br />

### Error Handling Log 🍭.

```JavaScript
const deleteTags = (idx) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[idx];
      })
    );
  };
```

> 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하는 `findIndex()`함수를 사용하여 index를 찾아 삭제해주는 식의 로직을 짰지만 돌아가는 느낌이 있어,
> 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 `filter()`함수를 사용하여 효율적을 로직을 구현

- `findIndex()`함수 => `update 시 사용`
- `filter()`함수 => `delete 시 사용`
- 으로 정의를 내림

### 자세한 실행 방법 🍦.

> 1. 배열 tagsArray 만든 후 map() 함수를 사용하여 tag를 생성
> 2. `<input type="text">`에 사용자가 키보드의 Enter 키를 눌렀다가 땠을 때 이벤트가 발생하도록 하기 위해 onKeyup() 함수 사용
> 3. trim() 함수를 사용하여 공백 입력이 되지않게 하기
> 4. includes() 함수를 사용하여 중복된 tag 인지 검사하기
> 5. filter() 함수를 사용하여 true 값만 반환하는 새로운 배열을 setTags에 넣어 tag 값 삭제

<br /><br />

### 5. ClickToEdit Component

<img src="https://user-images.githubusercontent.com/89959952/152826076-29c8feed-2bd9-4697-bc26-cfd7fbbf8f50.gif" width="500px" height="300px" title="ClickToEdit" alt="ClickToEdit"></img><br/>

### 구현 방법 🧁.

> 1. 리렌더링시에 인라인 스타일이 적용된 컴포넌트와 HTML 태그가 돔을 새로 그리게 되어 불필요한 리로딩이 발생 및 style 속성의 재사용성이 떨어져 `styled component` 사용
> 2. 부모 자식의 관계에 있는 컴포넌트 간에 상태나 특정 값을 전달하기 위해 사용하기위해 `props`를 사용
> 3. setState를 이용해서 값을 변화시키며, state가 변경되면 컴포넌트가 다시 렌더링되는 `useState(Hooks)` 사용
> 4. JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없으므로 `{ } 안에서 삼항연산자(조건부 연산자)`를 사용
> 5. useRef를 사용해서 input창을 클릭했을 때만 값을 바꿀 수 있게 해줌
> 6. 포커스가 해지될 때 이벤트 설정을 위해 onblur 함수 사용
> 7. `<input type="text">` 중복적으로 사용되어 컴포넌트 <InputBox>로 만든 후 재사용 함

<br />

### Error Handling Log 🍭.

> onblur 함수를 처음 접하게 되어 MDN문서를 보고 개념정리를 다시하게 됨

- JavaScript
  - blur() : 선택요소에서 포커스 제거.
  - focus() : 선택요소가 포커스 될 때 지정 함수 실행
- html 태그
  - onfocus : 포커스를 받은 경우 이벤트 설정
  - onblur : 포커스가 해지될 때 이벤트 설정

### 자세한 실행 방법 🍦.

> 1. `<input type="text">` 중복적으로 사용되어 컴포넌트 <InputBox>로 만든 후 이름과 나이 라벨 뒤에 하나씩 사용
> 2. `<InputBox value={name} editChange={(e) => setName(e)} />`에 info 객체 값 및 이름과 나이의 value를 바꾸는 setState를 editChange라는 변수명으로 props로 넘겨 줌
> 3. `const [isEdit, setEdit] = React.useState(false);`의 isEdit을 삼항연산자 조건으로 사용하여 true이며 input 태그, false이며 span 태그가 보이도록 함
> 4. input 태그에 `onChange` 이벤트 핸들러를 이용하여 `handleChange` 함수로 setNewValue를 통해 input의 value 속성을 변경해 주며, `onBlur` 이벤트 핸들러를 이용하여 `handleBlur` 함수로 setEdit(false)와 props.editChange(newValue)를 통해 isEdit 값과 부모요소의 name과 age 값을 변경해줌

<br /><br />
