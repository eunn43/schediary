import { useRouter } from "next/router";
import {
  BtnWrapper,
  TitleContent,
  TextAreaContent,
  Btn,
  BtnIcon,
  FlipCard,
  CardFront,
  CardBack,
  CardBackGround,
  CardBackHeader,
} from "@/styles/detail";
import {
  Page,
  PageWrapper,
  LabelWrapper,
  Header,
  Label,
  SubmitBtn,
} from "@/styles/new";
import { useState } from "react";

export default function DetailPage(data) {
  const router = useRouter();
  const id = router.query.boardId;
  const [isFilpped, setIsFlipped] = useState(false);

  const onClickCard = () => {
    setIsFlipped(!isFilpped);
  };

  return (
    <Page>
      <FlipCard onClick={onClickCard} className={isFilpped ? "flipped" : ""}>
        <CardFront>
          <BtnWrapper>
            <Btn>
              <BtnIcon className="fa-solid fa-pencil" />
            </Btn>
            <Btn>
              <BtnIcon className="fa-solid fa-x" />
            </Btn>
          </BtnWrapper>
          <LabelWrapper>
            <Header>2023 / 04 / 26</Header>
          </LabelWrapper>
          <LabelWrapper>
            <Label>제목</Label>
            <TitleContent>{data.title}</TitleContent>
          </LabelWrapper>
          <LabelWrapper>
            <Label>내용</Label>
            <TextAreaContent>{data.text}</TextAreaContent>
          </LabelWrapper>
        </CardFront>
        <CardBack>
          <CardBackGround
            color1={"#FFD700"}
            color2={"#87CEEB"}
            color3={"#98FB98"}
          >
            <CardBackHeader>{"2023 / 04 / 26"}</CardBackHeader>
          </CardBackGround>
        </CardBack>
      </FlipCard>
    </Page>
  );
}
