import {
  PageWrapper,
  LabelWrapper,
  Header,
  Label,
  Input,
  SubmitBtn,
  TextArea,
} from "../../../styles/new.js";

export default function NewPage() {
  return (
    <>
      <PageWrapper>
        <LabelWrapper>
          <Header>게시글 작성</Header>
        </LabelWrapper>
        <LabelWrapper>
          <Label>제목</Label>
          <Input />
        </LabelWrapper>
        <LabelWrapper>
          <Label>작성자</Label>
          <Input />
        </LabelWrapper>
        <LabelWrapper>
          <Label>내용</Label>
          <TextArea />
        </LabelWrapper>

        <SubmitBtn>제출하기</SubmitBtn>
      </PageWrapper>
    </>
  );
}
