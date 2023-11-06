import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ItemLink({ to, children }) {
  return <StyledItemLink to={to}>{children}</StyledItemLink>;
}

const StyledItemLink = styled(Link)`
  flex-grow: 1;
  margin-right: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #333333;
`;
