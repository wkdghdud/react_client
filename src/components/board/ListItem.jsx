import React from "react";
import styled from "styled-components";

export default function ListItem({ children }) {
  return <StyledListItem>{children}</StyledListItem>;
}

const StyledListItem = styled.li`
  border-bottom: 1px solid #aaaaaa;
  padding: 16px 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  &:first-child {
    border-top: 1px solid #aaaaaa;
  }
`;
