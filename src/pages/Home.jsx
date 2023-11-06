import React from "react";
import HomeContainer from "../container/HomeContainer";

import SubTitle from "../components/home/SubTitle";
import {Button,Form,Input,Inputs,LinkButton,} from "../components/common/Common";
import { useRecoilState } from "recoil";
import {UserLoginEmailAtom,UserLoginPasswordAtom,} from "../recoil/UserLoginAtom";

export default function Home({ onLogIn }) {
  const [email, setEmail] = useRecoilState(UserLoginEmailAtom);
  const [password, setPassword] = useRecoilState(UserLoginPasswordAtom);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    onLogIn(); // 로그인 시도
    setPassword("");
  };
  return (
    <HomeContainer>
      <SubTitle>React 연습장</SubTitle>
      <Form onSubmit={handleLogin}>
        <Inputs>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail을 입력하세요."
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={onChangePassword}
          />
        </Inputs>
        <Button color="blue" type="submit">
          로그인
        </Button>
        <LinkButton to="/signup">회원가입</LinkButton>
      </Form>
    </HomeContainer>
  );
}
