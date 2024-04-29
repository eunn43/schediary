const STORAGE_KEY = "diaryList";

const loadDataArr = () => {
  const diaryList = localStorage.getItem(STORAGE_KEY);
  return diaryList ? JSON.parse(diaryList) : [];
};

const saveDataArr = (diaryList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(diaryList));
};

export const addData = (date, title, content, colors) => {
  const diaryList = loadDataArr();
  const newId =
    diaryList.length > 0 ? diaryList[diaryList.length - 1].id + 1 : 1;
  const newData = {
    id: newId,
    date: date,
    title: title,
    content: content,
    colors: colors,
  };
  diaryList.push(newData);
  saveDataArr(diaryList);
};

export const delDataById = (id) => {
  const diaryList = loadDataArr();
  const filteredArr = diaryList.filter((data) => data.id !== id);
  saveDataArr(filteredArr);
};

export const modDataById = (id, date, title, content, colors) => {
  const diaryList = loadDataArr();
  const updatedData = diaryList.map((data) => {
    if (data.id === id)
      return {
        ...data,
        date: date,
        title: title,
        content: content,
        colors: colors,
      };
    return data;
  });
  saveDataArr(updatedData);
};

export const getDataByDate = (date) => {
  const diaryList = loadDataArr();
  const data = diaryList.find((data) => data.date === date);
  return data || null;
};

export const getDataById = (id) => {
  const diaryList = loadDataArr();
  const data = diaryList.find((data) => data.id == id);
  return data || null;
};

export const getDiaryList = () => {
  return loadDataArr();
};
