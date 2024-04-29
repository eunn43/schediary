import { useState } from "react";
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
import { addData, getDataByDate } from "utils/storage";

export default function NewPage() {
  const router = useRouter();
  const date = router.query.date;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");

  const onClickClose = () => {
    router.push("/boards");
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
      addData(date, title, content, []);
      const data = getDataByDate(date);
      router.push({ pathname: `/boards/${data.id}` });
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
