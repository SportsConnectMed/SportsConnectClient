export const getCurrentHour = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();

  if (hour >= 5 && hour < 12) {
    return "Buenos días";
  } else if (hour >= 12 && hour < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
};
