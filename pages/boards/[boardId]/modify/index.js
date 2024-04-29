import { useEffect, useLayoutEffect, useState } from "react";
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
import { getDataById, modDataById } from "@/utils/storage";

export default function ModifyPage() {
  const router = useRouter();
  const [id, setId] = useState(0);
  const [data, setData] = useState({
    id: id,
    date: "",
    title: "",
    content: "",
    colors: [],
  });

  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.text);

  const [titleErr, setTitleErr] = useState("");
  const [contentErr, setContentErr] = useState("");

  useEffect(() => {
    setId(router.query.boardId);
    const getData = getDataById(id);
    if (getData) setData(getData);
  }, [id]);

  const onClickClose = () => {
    router.push(`/boards/${id}`);
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
      modDataById(id, data.date, title, content, []);
      router.push(`/boards/${id}`);
    }
  };

  return (
    <Page>
      <PageWrapper>
        <BtnWrapper>
          <Btn>닫기</Btn>
        </BtnWrapper>
        <LabelWrapper>
          <Header>수정하기</Header>
        </LabelWrapper>
        <LabelWrapper>
          <Input
            type="text"
            onChange={onChangeTitle}
            placeholder="제목"
            value={title}
          />
          <Error>{titleErr}</Error>
        </LabelWrapper>
        <LabelWrapper>
          <TextArea
            onChange={onChangeContent}
            placeholder="내용"
            value={content}
          />
          <Error>{contentErr}</Error>
        </LabelWrapper>

        <SubmitBtn onClick={onClickSubmitBtn}>등록하기</SubmitBtn>
      </PageWrapper>
    </Page>
  );
}
