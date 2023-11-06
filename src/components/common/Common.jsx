import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Form({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;
`;

export function Inputs({ children }) {
  return <StyledInputs>{children}</StyledInputs>;
}
const StyledInputs = styled.div`
  margin-bottom: 1.625rem;
`;

export function Input({
  type = "text",
  name,
  id,
  placeholder = "",
  value = "",
  onChange,
}) {
  return (
    <>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    </>
  );
}
const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid #aaaaaa;
  width: 100%;
  height: 3.75rem;
  padding: 0 1.875rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  &::placeholder {
    color: #9a9a9a;
  }
`;
const StyledLabel = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0); /* IE 6,7 */
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  & + input {
    margin-bottom: 1.5rem;
  }
`;

export function Button({ type = "button", color, children }) {
  if (color === "blue") {
    return <StyledButtonBlue type={type}>{children}</StyledButtonBlue>;
  }
  return <StyledButton type={type}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  width: 100%;
  height: 3.75rem;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 0.5rem;
  color: #191919;
  cursor: pointer;
  & + button {
    margin-top: 1.5rem;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;
const StyledButtonBlue = styled.button`
  width: 100%;
  height: 3.75rem;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  background-color: #768cff;
  color: #ffffff;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #506dff;
  }
`;

export function LinkButton({ to, children }) {
  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
}
const StyledLinkButton = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 3.75rem;
  line-height: 3.75rem;
  margin-top: 1.5rem;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 0.5rem;
  color: #191919;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export function Textarea({ name, id, placeholder = "", value = "", onChange }) {
  return (
    <StyledTextarea
      id={id}
      name={name}
      defaultValue={value}
      onChange={onChange}
      placeholder={placeholder}
    ></StyledTextarea>
  );
}

const StyledTextarea = styled.textarea`
  border: 0;
  border-bottom: 1px solid #aaaaaa;
  width: 100%;
  height: 500px;
  padding: 1rem 1.875rem 0 1.875rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  resize: none;
  &::placeholder {
    color: #9a9a9a;
  }
  @media screen and (max-width: 1440px) {
    height: 300px;
  }
`;

export function A11yHiddenSpan({ children }) {
  return <StyledA11yHiddenSpan>{children}</StyledA11yHiddenSpan>;
}

const StyledA11yHiddenSpan = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0); /* IE 6,7 */
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;
