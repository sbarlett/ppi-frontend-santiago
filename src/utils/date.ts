import dayjs from 'dayjs';

export const formatDate = (date: Date) => {
  return dayjs(date).format('MMM DD, YYYY, HH:mm UTC');
};

export const now = dayjs().format('MMM DD, YYYY, HH:mm UTC');
