enum DayOfWeekIds {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeekIds): boolean => {
  return day === DayOfWeekIds.Saturday || day === DayOfWeekIds.Sunday;
};
