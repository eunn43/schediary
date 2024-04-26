import { useState } from "react";
import {
  Page,
  PageWrapper,
  LabelWrapper,
  Header,
  Label,
  Input,
  Error,
  SubmitBtn,
  TextArea,
} from "@/styles/new.js";
import { BtnWrapper, Btn, BtnIcon } from "@/styles/detail.js";

export default function ModifyPage(data) {
  const [title, setTitle] = useState(data.title);
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState(data.text);

  const [titleErr, setTitleErr] = useState("");
  const [writerErr, setWriterErr] = useState("");
  const [contentErr, setContentErr] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") setTitleErr("");
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value !== "") setWriterErr("");
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (e.target.value !== "") setContentErr("");
  };

  const onClickSubmitBtn = () => {
    if (!title) setTitleErr("제목을 입력해주세요");
    if (!writer) setWriterErr("이름을 입력해주세요");
    if (!content) setContentErr("내용을 입력해주세요");
    if (title && writer && content) {
      alert("게시글이 등록되었습니다");
    }
  };

  return (
    <Page>
      <PageWrapper>
        <BtnWrapper>
          <Btn>
            <BtnIcon className="fa-solid fa-x" />
          </Btn>
        </BtnWrapper>
        <LabelWrapper>
          <Header>수정하기</Header>
        </LabelWrapper>
        <LabelWrapper>
          <Label>제목</Label>
          <Input type="text" onChange={onChangeTitle} />
          <Error>{titleErr}</Error>
        </LabelWrapper>
        <LabelWrapper>
          <Label>내용</Label>
          <TextArea onChange={onChangeContent} />
          <Error>{contentErr}</Error>
        </LabelWrapper>

        <SubmitBtn onClick={onClickSubmitBtn}>등록하기</SubmitBtn>
      </PageWrapper>
    </Page>
  );
}
