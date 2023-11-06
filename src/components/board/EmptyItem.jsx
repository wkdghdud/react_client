import React from "react";
import styled from "styled-components";

export default function EmptyItem({ children }) {
  return <StyledEmptyItem>{children}</StyledEmptyItem>;
}

const StyledEmptyItem = styled.span`
  display: block;
  box-sizing: border-box;
  padding: 0.75rem 0;
  text-align: center;
  font-size: 1rem;
  color: #999999;
`;
