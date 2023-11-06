import React from "react";
import styled from "styled-components";

export default function MainTitle({ children }) {
  return <StyledMainTitle>{children}</StyledMainTitle>;
}

const StyledMainTitle = styled.h2`
  margin-bottom: 2.5rem;
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: #191919;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
