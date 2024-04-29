import { useRouter } from "next/router";
import {
  BtnWrapper,
  TitleContent,
  TextAreaContent,
  Btn,
  FlipCard,
  CardFront,
  CardBack,
  CardBackGround,
  CardBackHeader,
} from "@/styles/detail";
import { Page, LabelWrapper, Header } from "@/styles/new";
import { useEffect, useState } from "react";
import { delDataById, getDataById } from "@/utils/storage";

export default function DetailPage() {
  const router = useRouter();
  const [id, setId] = useState(0);
  const [isFilpped, setIsFlipped] = useState(false);
  const [data, setData] = useState({
    id: id,
    date: "",
    title: "",
    content: "",
    colors: [],
  });

  useEffect(() => {
    setId(router.query.boardId);
    const getData = getDataById(id);
    if (getData) setData(getData);
  }, [id]);

  const onClickDelete = () => {
    delDataById(id);
    router.push("/boards");
  };

  const onClickModify = () => {
    router.push(`/boards/${id}/modify`);
  };

  const onClickClose = () => {
    router.push("/boards");
  };

  const onClickCard = () => {
    setIsFlipped(!isFilpped);
  };

  return (
    <Page>
      <FlipCard onClick={onClickCard} className={isFilpped ? "flipped" : ""}>
        <CardFront>
          <BtnWrapper>
            <Btn onClick={onClickDelete}>삭제</Btn>
            <Btn onClick={onClickModify}>수정</Btn>
            <Btn onClick={onClickClose}>닫기</Btn>
          </BtnWrapper>
          <LabelWrapper>
            <Header>{data.date}</Header>
          </LabelWrapper>
          <LabelWrapper>
            <TextAreaContent>{data.content}</TextAreaContent>
          </LabelWrapper>
        </CardFront>
        <CardBack>
          <CardBackGround
            color1={"#FFD700"}
            color2={"#87CEEB"}
            color3={"#98FB98"}
          >
            <CardBackHeader>{data.date}</CardBackHeader>
            <LabelWrapper>
              <TitleContent>{data.title}</TitleContent>
            </LabelWrapper>
          </CardBackGround>
        </CardBack>
      </FlipCard>
    </Page>
  );
}
