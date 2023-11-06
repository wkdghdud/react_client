import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BlueLink({ to, children }) {
  return <StyledBlueLink to={to}>{children}</StyledBlueLink>;
}

const StyledBlueLink = styled(Link)`
  display: inline-block;
  width: 18.75rem;
  height: 3.75rem;
  line-height: 3.75rem;
  position: fixed;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
  border-radius: 0.5rem;
  background-color: #768cff;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #506dff;
  }
`;
