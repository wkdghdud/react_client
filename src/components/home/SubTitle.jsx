import React from "react";
import styled from "styled-components";

export default function SubTitle({ children }) {
  return <StyledSubTitle>{children}</StyledSubTitle>;
}

const StyledSubTitle = styled.p`
  font-size: 1.5rem;
  color: #333333;
  text-align: center;
  margin-bottom: 3.75rem;
`;
