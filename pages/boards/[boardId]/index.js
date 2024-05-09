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
import {
  Memo,
  MemoBox,
  ScheduleContent,
  ScheduleContentBox,
  ScheduleTime,
  ScheduleTimeBox,
  ScheduleWrapper,
} from "styles/detailSchedule";

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
  const [schedule, setSchedule] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "점심 : 보쌈 덮밥",
  ]);
  const start = 6,
    end = 24;
  useEffect(() => {
    setId(router.query.boardId);
    const getData = getDataById(id);
    if (getData)
      setData({
        id: getData.id,
        date: getData.date,
        title: getData.title,
        content: getData.content,
      });
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
            <TitleContent>{data.title}</TitleContent>
          </LabelWrapper>
          <LabelWrapper>
            <TextAreaContent>{data.content}</TextAreaContent>
          </LabelWrapper>
        </CardFront>
        <CardBack>
          <CardBackGround
          // color1={"#FFD700"}
          // color2={"#87CEEB"}
          // color3={"#98FB98"}
          >
            {/* <CardBackHeader>{data.date}</CardBackHeader> */}
            <ScheduleWrapper>
              <ScheduleTimeBox>
                {Array.from(
                  { length: end - start + 1 },
                  (_, i) => i + start
                ).map((num) => (
                  <ScheduleTime schedule={schedule[num - start]}>
                    {num.toString().padStart(2, "0")}
                  </ScheduleTime>
                ))}
              </ScheduleTimeBox>
              <ScheduleContentBox>
                {Array.from({ length: end - start + 1 }, (_, i) => i).map(
                  (num) => (
                    <ScheduleContent>{schedule[num]}</ScheduleContent>
                  )
                )}
              </ScheduleContentBox>
              <MemoBox>
                <BtnWrapper>
                  <Btn>삭제</Btn>
                  <Btn>수정</Btn>
                  <Btn onClick={onClickClose}>닫기</Btn>
                </BtnWrapper>
                <Memo>{"TODO\n- 운동 하기\n- 집에 가기"}</Memo>
                <Memo></Memo>
              </MemoBox>
            </ScheduleWrapper>
          </CardBackGround>
        </CardBack>
      </FlipCard>
    </Page>
  );
}
