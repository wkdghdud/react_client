import React from "react";
import { useNavigate } from "react-router-dom";
import SignupContainer from "../container/SignupContainer";
import MainTitle from "../components/common/MainTitle";
import {
  Button,
  Form,
  Input,
  Inputs,
  LinkButton,
} from "../components/common/Common";
import { useRecoilState } from "recoil";
import {
  RegisterEmailAtom,
  RegisterNameAtom,
  RegisterPasswordAtom,
} from "../recoil/RegisterAtom";

export default function Signup() {
  const [userName, setUserName] = useRecoilState(RegisterNameAtom);
  const [userEmail, setUserEmail] = useRecoilState(RegisterEmailAtom);
  const [userPw, setUserPw] = useRecoilState(RegisterPasswordAtom);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPw,
        }),
      });
      if (response.status === 200) {
        // 회원가입 성공
        alert("회원가입 성공");
        navigate("/");
      } else {
        const data = await response.json();
        console.log(data);
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error(error);
      alert("올바른 정보를 입력해주세요.");
    }
  };

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };
  return (
    <SignupContainer>
      <MainTitle>회원가입</MainTitle>
      <Form onSubmit={handleSignup}>
        <Inputs>
          <Input
            type="text"
            id="userName"
            name="name"
            placeholder="이름을 입력하세요."
            value={userName}
            onChange={onChangeName}
          />
          <Input
            type="email"
            id="userEmail"
            name="email"
            placeholder="E-mail을 입력하세요."
            value={userEmail}
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            id="userPassword"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={userPw}
            onChange={onChangePw}
          />
        </Inputs>
        <Button color="blue" type="submit">
          회원가입
        </Button>
        <LinkButton to="/">로그인</LinkButton>
      </Form>
    </SignupContainer>
  );
}
