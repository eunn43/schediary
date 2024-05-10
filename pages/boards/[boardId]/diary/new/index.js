import { useEffect, useState } from "react";
import {
  Page,
  PageWrapper,
  LabelWrapper,
  Header,
  Input,
  Error,
  SubmitBtn,
  TextArea,
} from "@/styles/new.js";
import { BtnWrapper, Btn } from "@/styles/detail.js";
import { useRouter } from "next/router";
import { addDiary } from "@/utils/diaryStorage";

export default function NewPage() {
  const router = useRouter();
  const [date, setDate] = useState(router.query.boardId);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");

  useEffect(() => {
    setDate(router.query.boardId);
  }, [router.query.boardId]);

  const onClickClose = () => {
    router.push(`/boards/${date}`);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") setTitleErr("");
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (e.target.value !== "") setContentErr("");
  };

  const onClickSubmitBtn = () => {
    if (!title) setTitleErr("제목을 입력해주세요");
    if (!content) setContentErr("내용을 입력해주세요");
    if (title && content) {
      addDiary(date, title, content);
      router.push(`/boards/${date}`);
    }
  };

  return (
    <Page>
      <PageWrapper>
        <BtnWrapper>
          <Btn onClick={onClickClose}>닫기</Btn>
        </BtnWrapper>
        <LabelWrapper>
          <Header>일기 작성하기</Header>
        </LabelWrapper>
        <LabelWrapper>
          <Input type="text" onChange={onChangeTitle} placeholder="제목" />
          <Error>{titleErr}</Error>
        </LabelWrapper>
        <LabelWrapper>
          <TextArea onChange={onChangeContent} placeholder="내용" />
          <Error>{contentErr}</Error>
        </LabelWrapper>
        <SubmitBtn onClick={onClickSubmitBtn}>등록하기</SubmitBtn>
      </PageWrapper>
    </Page>
  );
}
