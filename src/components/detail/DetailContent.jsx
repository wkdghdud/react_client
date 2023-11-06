import React from "react";
import styled from "styled-components";

export default function DetailContent({ children }) {
  return <StyledDetailContent>{children}</StyledDetailContent>;
}

const StyledDetailContent = styled.p`
  box-sizing: border-box;
  padding-bottom: 12.5rem;
  font-size: 1.25rem;
  color: #333333;
  line-height: 1.5;
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
