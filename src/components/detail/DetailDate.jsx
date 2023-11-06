import React from "react";
import styled from "styled-components";

export default function DetailDate({ children }) {
  return <StyledDetailDate>{children}</StyledDetailDate>;
}

const StyledDetailDate = styled.span`
  margin: 1rem 0;
  display: block;
  text-align: right;
  font-weight: 300;
  font-size: 1rem;
  color: #999999;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
