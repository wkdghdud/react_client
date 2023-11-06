import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as EditSvg } from "../../assets/icon/icon-edit.svg";
import { A11yHiddenSpan } from "../common/Common";

export default function EditButton({ to }) {
  return (
    <StyledEditButton to={to}>
      <A11yHiddenSpan>수정</A11yHiddenSpan>
      <EditSvg fill="#999999" />
    </StyledEditButton>
  );
}

const StyledEditButton = styled(Link)`
  display: inline-block;
  height: 1.5rem;
  flex-shrink: 0;
  font-size: 0.75rem;
  color: #ffffff;
  text-decoration: none;
  border: 0;
  &:hover svg {
    fill: #333333;
  }
`;
