const DIARY_STORAGE_KEY = "diaryList";

const loadDiaryList = () => {
  const diaryList = localStorage.getItem(DIARY_STORAGE_KEY);
  return diaryList ? JSON.parse(diaryList) : {};
};

const saveDiaryList = (diaryList) => {
  localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(diaryList));
};

export const addDiary = (date, title, content) => {
  const diaryList = loadDiaryList();
  const newData = {
    title: title,
    content: content,
  };
  diaryList[date] = newData;
  console.log(newData);
  console.log(diaryList);
  saveDiaryList(diaryList);
};

export const delDiary = (date) => {
  const diaryList = loadDiaryList();
  delete diaryList[date];
  saveDiaryList(diaryList);
};

export const modDiary = (date, title, content) => {
  const diaryList = loadDiaryList();
  if (diaryList[date]) {
    diaryList[date].title = title;
    diaryList[date].content = content;
  }
  saveDiaryList(diaryList);
};

export const getDiary = (date) => {
  const diaryList = loadDiaryList();
  console.log(date);
  console.log(diaryList);
  return diaryList[date] || null;
};

export const getDiaryList = () => {
  return loadDiaryList();
};
