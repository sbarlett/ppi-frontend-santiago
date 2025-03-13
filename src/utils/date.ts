import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

export const formatDate = (date: Date) => {
  return dayjs(date).format("MMM DD, YYYY, HH:mm UTC");
};

export const now = dayjs().format("MMM DD, YYYY, HH:mm UTC");
