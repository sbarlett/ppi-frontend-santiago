import { now } from "../utils/date";

export interface FormValues {
  amount: number;
  from: string;
  to: string;
  date: string;
}

export const defaultValues: FormValues = {
  amount: 1,
  from: 'USD',
  to: 'EUR',
  date: now,
};
