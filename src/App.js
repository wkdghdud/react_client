import React, { useEffect } from "react";
import { Reset } from "styled-reset";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Header from "./components/header/Header";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  UserLoginEmailAtom,
  UserLoginPasswordAtom,
} from "./recoil/UserLoginAtom";
import { UserTokenAtom } from "./recoil/UserTokenAtom";
function App() {
  // 상태 변수를 사용하여 토큰 상태 관리
  const [userToken, setUserToken] = useRecoilState(UserTokenAtom);

  // 로그인 이메일, 패스워드
  const email = useRecoilValue(UserLoginEmailAtom);
  const password = useRecoilValue(UserLoginPasswordAtom);

  // 로그인 함수
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.loginSuccess === true) {
        localStorage.setItem("user_token", data.userToken);
        alert("로그인에 성공하였습니다.");
        setUserToken(data.userToken);
      } else {
        alert("로그인 정보를 다시 확인해주세요.");
      }
    } catch (error) {
      console.error(error);
      alert("올바른 정보를 입력해주세요.");
    }
  };

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem("user_token"); // 로컬 스토리지에서 토큰 제거
    setUserToken(null); // 상태를 업데이트하여 헤더 리렌더링
    alert("로그아웃 되었습니다.");
  };

  // 상태가 변경될 때마다 로컬 스토리지에도 업데이트
  useEffect(() => {
    if (userToken) {
      localStorage.setItem("user_token", userToken);
    } else {
      localStorage.removeItem("user_token");
    }
  }, [userToken]);

  return (
    <React.Fragment>
      <Reset />
      <Router>
        {userToken ? <Header onLogOut={handleLogout} /> : null}
        <Routes>
          {!userToken ? (
            <Route path="/" element={<Home onLogIn={handleLogin} />}></Route>
          ) : (
            <Route path="/" element={<Navigate to="/board" />} />
          )}
          <Route exact path="/board" element={<Board />}></Route>
          <Route path="/board/:id" element={<Detail />}></Route>
          <Route path="/board/edit/:id" element={<Edit />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
