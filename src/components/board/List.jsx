import React from "react";
import styled from "styled-components";

export default function List({ children }) {
  return <StyledList>{children}</StyledList>;
}

const StyledList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding-bottom: 200px;
`;
