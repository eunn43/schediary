import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import {
  BoardWrapper,
  PageHeader,
  HeaderIcon,
  PageBody,
  CalendarWrapper,
  CalendarDot,
} from "@/styles/board";
import { getDiaryList } from "@/utils/storage";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  // const diaryList = getDiaryList();
  const diaryList = ["2024-04-03", "2024-04-10", "2024-04-20"];
  const addContent = ({ date }) => {
    const contents = [];

    if (diaryList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      contents.push(
        <>
          <CalendarDot />
        </>
      );
    }
    return <div>{contents}</div>;
  };

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  const onClickDay = (e) => {
    router.push(
      {
        pathname: "/boards/new",
        query: { date: moment(e).format("YYYY-MM-DD") },
      },
      "/boards/new"
    );
  };

  return (
    <BoardWrapper>
      <PageHeader>
        오늘의 일기
        <HeaderIcon className="fa-solid fa-cloud" />
      </PageHeader>
      <PageBody>
        <CalendarWrapper>
          <Calendar
            locale="ko"
            onChange={onChangeDate}
            value={date}
            calendarType="gregory"
            view="month"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            tileContent={addContent}
            onClickDay={onClickDay}
            formatDay={(locale, date) => moment(date).format("D")}
          />
        </CalendarWrapper>
      </PageBody>
    </BoardWrapper>
  );
}
