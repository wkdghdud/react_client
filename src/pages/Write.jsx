import React from "react";
import WriteContainer from "../container/WriteContainer";
import MainTitle from "../components/common/MainTitle";
import {
  Button,
  Form,
  Input,
  Inputs,
  Textarea,
} from "../components/common/Common";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  PostWriteContentAtom,
  PostWriteTitleAtom,
} from "../recoil/PostWriteAtom";

export default function Write() {
  const [title, setTitle] = useRecoilState(PostWriteTitleAtom);
  const [content, setContent] = useRecoilState(PostWriteContentAtom);
  const navigate = useNavigate();
  const token = localStorage.getItem("user_token");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 작성 날짜 함수
  const currentTime = () => {
    let today = new Date();
    let year = today.getFullYear().toString().slice(2, 4);
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let result = year + "." + month + "." + day;
    return result;
  };

  const handleWrite = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          date: currentTime(),
          token,
        }),
      });
      if (response.status === 201) {
        // 게시물 작성 성공
        setTitle("");
        setContent("");
        alert("게시물 작성 성공");
        navigate("/board");
      } else {
        const data = await response.json();
        console.log(data);
        alert("게시물 작성 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WriteContainer>
      <MainTitle>글쓰기</MainTitle>
      <Form onSubmit={handleWrite}>
        <Inputs>
          <Input
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            id="title"
            name="title"
            onChange={onChangeTitle}
          />
          <Textarea
            placeholder="내용을 입력해주세요."
            value={content}
            id="content"
            name="content"
            onChange={onChangeContent}
          ></Textarea>
        </Inputs>
        <Button color="blue" type="submit">
          작성하기
        </Button>
      </Form>
    </WriteContainer>
  );
}
