import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import { getScheduleList } from "@/utils/scheduleStorage";
import { getDiaryList } from "@/utils/diaryStorage";

export default function MainPage() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [diaryList, setDiaryList] = useState({});

  useEffect(() => {
    const data = getDiaryList();
    if (data) setDiaryList(data);
  }, []);

  const addContent = ({ date }) => {
    const contents = [];

    if (diaryList[moment(date).format("YYYY-MM-DD")]) {
      contents.push(<CalendarDot />);
    }
    return <div>{contents}</div>;
  };

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  const onClickDay = (e) => {
    const clickedDate = moment(e).format("YYYY-MM-DD");
    router.push(`/boards/${clickedDate}`);
  };

  return (
    <BoardWrapper>
      <PageHeader>
        일기
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
