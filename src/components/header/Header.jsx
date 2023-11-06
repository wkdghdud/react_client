import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import styled from "styled-components";

export default function Header({ onLogOut }) {
  return (
    <StyledHeader>
      <h1>
        <Link to="/board" className="home-link">
          HOME
        </Link>
      </h1>
      <LogoutButton onLogOut={onLogOut}>로그아웃</LogoutButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.125rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.25rem;
  }

  .home-link {
    text-decoration: none;
    color: #333; /* 변경 원하는 색상으로 */
    font-size: 1.5rem; /* 변경 원하는 폰트 사이즈로 */
    font-weight: bold; /* 폰트 굵기 설정 */
  }
`;
