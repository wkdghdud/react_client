import React from "react";
import styled from "styled-components";

export default function DetailTitle({ children }) {
  return <StyledDetailTitle>{children}</StyledDetailTitle>;
}

const StyledDetailTitle = styled.h2`
  box-sizing: border-box;
  border-bottom: 1px solid #aaaaaa;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 2.5rem;
  color: #191919;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
