const SCHEDULE_STORAGE_KEY = "scheduleList";

const loadScheduleList = () => {
  const scheduleList = localStorage.getItem(SCHEDULE_STORAGE_KEY);
  return scheduleList ? JSON.parse(scheduleList) : {};
};

const saveScheduleList = (scheduleList) => {
  localStorage.setItem(SCHEDULE_STORAGE_KEY, JSON.stringify(scheduleList));
};

export const addSchedule = (date, timetable, memo1, memo2) => {
  const scheduleList = loadScheduleList();
  const newData = {
    timetable: [...timetable],
    memo1: memo1,
    memo2: memo2,
  };
  scheduleList[date] = newData;
  saveScheduleList(scheduleList);
};

export const modSchedule = (date, timetable, memo1, memo2) => {
  const scheduleList = loadScheduleList();
  const newData = {
    timetable: [...timetable],
    memo1: memo1,
    memo2: memo2,
  };
  scheduleList[date] = newData;
  saveScheduleList(scheduleList);
};

export const getSchedule = (date) => {
  const scheduleList = loadScheduleList();
  return scheduleList[date] || null;
};

export const getScheduleList = () => {
  return loadScheduleList();
};
