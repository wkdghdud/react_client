import React from "react";
import styled from "styled-components";

export default function BoardContainer({ children }) {
  return <StyledBoardContainer>{children}</StyledBoardContainer>;
}

const StyledBoardContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 3.125rem;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 7.5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;
