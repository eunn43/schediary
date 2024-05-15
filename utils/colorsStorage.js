const SCHEDULE_CHECK_COLORS_KEY = "colorList";

const loadColors = () => {
  const colors = localStorage.getItem(SCHEDULE_CHECK_COLORS_KEY);
  return colors ? JSON.parse(colors) : [];
};

const saveColors = (colors) => {
  localStorage.setItem(SCHEDULE_CHECK_COLORS_KEY, JSON.stringify(colors));
};

export const getColors = () => {
  return loadColors();
};

export const modColors = (colors) => {
  saveColors(colors);
};
