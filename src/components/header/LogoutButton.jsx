import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogOutSvg } from "../../assets/icon/icon-logout.svg";

export default function LogoutButton({ onLogOut }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    onLogOut();
    navigate("/");
  };
  return (
    <StyledLogoutButton onClick={handleLogOut}>
      <LogOutSvg fill="#ffffff" width="24px" height="24px" />
      <span>로그아웃</span>
    </StyledLogoutButton>
  );
}

const StyledLogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  height: 2.25rem;
  background-color: #555555;
  border-radius: 4px;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #191919;
  }
`;
