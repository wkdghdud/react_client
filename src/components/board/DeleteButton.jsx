import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteSvg } from "../../assets/icon/icon-delete.svg";
import { A11yHiddenSpan } from "../common/Common";

export default function DeleteButton({ handleDelete, post }) {
  return (
    <StyledDeleteButton onClick={() => handleDelete(post._id)}>
      <A11yHiddenSpan>삭제</A11yHiddenSpan>
      <DeleteSvg fill="#999999" />
    </StyledDeleteButton>
  );
}

const StyledDeleteButton = styled.button`
  flex-shrink: 0;
  height: 1.5rem;
  margin-left: 4px;
  padding: 0;
  background-color: transparent;
  font-size: 0.75rem;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  &:hover svg {
    fill: #333333;
  }
`;
