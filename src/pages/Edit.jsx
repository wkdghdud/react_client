import React, { useEffect } from "react";
import WriteContainer from "../container/WriteContainer";
import MainTitle from "../components/common/MainTitle";
import {
  Button,
  Form,
  Input,
  Inputs,
  Textarea,
} from "../components/common/Common";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { PostEditContentAtom, PostEditTitleAtom } from "../recoil/PostEditAtom";

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useRecoilState(PostEditTitleAtom);
  const [content, setContent] = useRecoilState(PostEditContentAtom);
  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/posts/edit", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      });
      if (response.status === 201) {
        setTitle("");
        setContent("");
        alert("게시물 수정 성공");
        navigate("/board");
      } else {
        const data = await response.json();
        console.log(data);
        alert("게시물 수정 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 게시물 내용 불러오기
  useEffect(() => {
    fetch(`http://localhost:3001/api/posts/read/detail?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        setContent(res.content);
      });
  }, [id, setContent, setTitle]);

  return (
    <WriteContainer>
      <MainTitle>수정하기</MainTitle>
      <Form onSubmit={handleEdit}>
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
          수정완료
        </Button>
      </Form>
    </WriteContainer>
  );
}
