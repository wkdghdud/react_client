import React from "react";
import mainLogo from "../../assets/img/main-logo.png";
import styled from "styled-components";

export default function MainLogo() {
  return (
    <StyledMainLogo>
      <img src={mainLogo} alt="Secret Note" />
    </StyledMainLogo>
  );
}

const StyledMainLogo = styled.h1`
  margin-bottom: 2.5rem;
  text-align: center;
  img {
    width: 21.875rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 17.5rem;
    }
  }
`;
