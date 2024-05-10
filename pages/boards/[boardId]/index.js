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
} from "@/styles/detail";
import { Page, LabelWrapper, Header } from "@/styles/new";
import { useEffect, useState } from "react";
import {
  Memo,
  MemoBox,
  ScheduleContent,
  ScheduleContentBox,
  ScheduleTime,
  ScheduleTimeBox,
  ScheduleWrapper,
} from "@/styles/detailSchedule";
import { getDiary, delDiary } from "@/utils/diaryStorage";
import { getSchedule } from "@/utils/scheduleStorage";

const start = 6;
const end = 24;

export default function DetailPage() {
  const router = useRouter();
  const [isFilpped, setIsFlipped] = useState(false);
  const [date, setDate] = useState(router.query.boardId);
  const [diary, setDiary] = useState({
    title: "",
    content: "",
  });
  const [diaryExist, setDiaryExist] = useState(false);
  const [schedule, setSchedule] = useState({
    timetable: Array(end - start).fill({ task: "", color: "" }),
    memo1: "",
    memo2: "",
  });

  useEffect(() => {
    setDate(router.query.boardId);
    const diaryData = getDiary(date);
    if (diaryData) {
      setDiaryExist(true);
      setDiary({ title: diaryData.title, content: diaryData.content });
    }

    const scheduleData = getSchedule(date);
    if (scheduleData) {
      setSchedule({
        timetable: [...scheduleData.timetable],
        memo1: scheduleData.memo1,
        memo2: scheduleData.memo2,
      });
    }
    console.log(date);
    console.log("diary: ", diaryData);
    console.log("schedule: ", scheduleData);
  }, [router.query.boardId]);

  const onClickDeleteDiary = () => {
    delDiary(date);
    setDiaryExist(false);
    setIsFlipped(false);
  };

  const onClickNewDiary = () => {
    router.push(`/boards/${date}/diary/new`);
  };

  const onClickModifyDiary = () => {
    router.push(`/boards/${date}/diary/modify`);
  };

  const onClickModifySchedule = () => {
    router.push(`/boards/${date}/schedule/modify`);
  };

  const onClickClose = () => {
    router.push("/boards");
  };

  const onClickCard = () => {
    if (diaryExist) setIsFlipped(!isFilpped);
  };

  return (
    <Page>
      <FlipCard onClick={onClickCard} className={isFilpped ? "flipped" : ""}>
        <CardFront>
          <CardBackGround>
            <ScheduleWrapper>
              <ScheduleTimeBox>
                {schedule.timetable.map((item, idx) => (
                  <ScheduleTime>
                    {(idx + start).toString().padStart(2, "0")}
                  </ScheduleTime>
                ))}
              </ScheduleTimeBox>
              <ScheduleContentBox>
                {schedule.timetable.map((item, idx) => (
                  <ScheduleContent>{item ? item.task : ""}</ScheduleContent>
                ))}
              </ScheduleContentBox>
              <MemoBox>
                <BtnWrapper>
                  {!diaryExist ? (
                    <Btn onClick={onClickNewDiary}>일기쓰기</Btn>
                  ) : (
                    ""
                  )}
                  <Btn onClick={onClickModifySchedule}>일정추가</Btn>
                  <Btn onClick={onClickClose}>닫기</Btn>
                </BtnWrapper>
                <Memo>{schedule.memo1}</Memo>
                <Memo>{schedule.memo2}</Memo>
              </MemoBox>
            </ScheduleWrapper>
          </CardBackGround>
        </CardFront>
        <CardBack>
          <BtnWrapper>
            <Btn onClick={onClickDeleteDiary}>삭제</Btn>
            <Btn onClick={onClickModifyDiary}>수정</Btn>
            <Btn onClick={onClickClose}>닫기</Btn>
          </BtnWrapper>
          <LabelWrapper>
            <Header>{date}</Header>
          </LabelWrapper>
          <LabelWrapper>
            <TitleContent>{diary.title}</TitleContent>
          </LabelWrapper>
          <LabelWrapper>
            <TextAreaContent>{diary.content}</TextAreaContent>
          </LabelWrapper>
        </CardBack>
      </FlipCard>
    </Page>
  );
}
