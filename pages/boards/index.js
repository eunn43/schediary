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
import { HeaderTitle, WeatherBox, WeatherImage } from "styles/board";

export default function MainPage() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [diaryList, setDiaryList] = useState({});
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weatherInfo, setWeatherInfo] =
    useState("날씨 정보를 받아오는 중입니다");
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const data = getDiaryList();
    if (data) setDiaryList(data);

    if (!navigator.geolocation) {
      setWeatherInfo("위치 정보를 사용할 수 없습니다");
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({
        latitude: latitude.toFixed(2),
        longitude: longitude.toFixed(2),
      });
    };

    const handleError = (error) => {
      setWeatherInfo(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const WEAHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=kr&units=metric&appid=${WEAHER_API_KEY}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTemp(data.main.temp.toFixed(1));
          setDescription(data.weather[0].description);
          setIcon(data.weather[0].icon);
        })
        .catch((err) => setWeatherInfo("날씨 정보를 받아올 수 없습니다"));
    }
  }, [location.latitude, location.longitude]);

  const addContent = ({ date }) => {
    const contents = [];
    const dateString = moment(date).format("YYYY-MM-DD");
    if (diaryList[dateString]) {
      contents.push(<CalendarDot key={dateString} />);
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
        <HeaderTitle>
          일기
          <HeaderIcon className="fa-solid fa-cloud" />
        </HeaderTitle>
        <WeatherBox>
          {temp !== null && description !== null
            ? `${temp}°C ${description}`
            : weatherInfo}
          {icon && (
            <WeatherImage
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather_img"
            />
          )}
        </WeatherBox>
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
