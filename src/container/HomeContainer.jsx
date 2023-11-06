import React from "react";
import styled from "styled-components";

export default function HomeContainer({ children }) {
  return <StyledHomeContainer>{children}</StyledHomeContainer>;
}

const StyledHomeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 25.875rem;
  margin: 0 auto;
  height: 100vh;
  padding: 0 3.125rem;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;
