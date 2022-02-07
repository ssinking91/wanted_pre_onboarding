import React from "react";
import styled from "styled-components";

export const Tag = () => {
  const tagsArray = ["CodeStates", "JJang"];

  const [tags, setTags] = React.useState(tagsArray);

  const addTags = (e) => {
    let value = e.target.value.trim();
    if (e.key === "Enter" && !tags.includes(value) && value) {
      setTags([...tags, value]);
      e.target.value = "";
    } else if (e.key === "Enter" && !value) {
      e.target.value = "";
    }
  };

  const deleteTags = (idx) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[idx];
      })
    );
  };

  return (
    <>
      <TagsInput>
        <TagsUl id="tags">
          {tags.map((item, idx) => (
            <TagsLi key={idx} className="tag">
              <span className="tagContent">{item}</span>
              <span className="tagClose" onClick={() => deleteTags(idx)}>
                &times;
              </span>
            </TagsLi>
          ))}
        </TagsUl>
        <input
          className="tag-input"
          type="text"
          placeholder="Press enter to add tags"
          onKeyUp={(e) => {
            addTags(e);
          }}
        />
      </TagsInput>
    </>
  );
};
export default Tag;

const TagsInput = styled.div`
  margin: 3% auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    ::placeholder {
      color: #a9a9a9;
    }
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #20D7FF;
  }
`;

const TagsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const TagsLi = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #20d7ff;

  > .tagClose {
    display: block;
    width: 16px;
    height: 16px;
    line-height: 14px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: black;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;
