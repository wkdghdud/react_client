import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailContainer from "../container/DetailContainer";
import DetailTitle from "../components/detail/DetailTitle";
import DetailDate from "../components/detail/DetailDate";
import DetailContent from "../components/detail/DetailContent";
import BlueLink from "../components/board/BlueLink";
import { PostDetailAtom } from "../recoil/PostDetailAtom";
import { useRecoilState } from "recoil";

export default function Detail() {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useRecoilState(PostDetailAtom);
  useEffect(() => {
    fetch(`http://localhost:3001/api/posts/read/detail?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setPostDetail(res);
      });
    return () => {
      setPostDetail(null);
    };
  }, [id, setPostDetail]);
  return (
    <DetailContainer>
      {!postDetail ? (
        <span>로딩중...</span>
      ) : (
        <>
          <DetailTitle>{postDetail.title}</DetailTitle>
          <DetailDate>{postDetail.date}</DetailDate>
          <DetailContent>{postDetail.content}</DetailContent>
        </>
      )}
      <BlueLink to="/board">목록</BlueLink>
    </DetailContainer>
  );
}
