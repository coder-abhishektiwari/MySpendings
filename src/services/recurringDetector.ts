import { Expense } from '../models/types';

const ONE_DAY = 24 * 60 * 60 * 1000;

export const detectRecurring = (expenses: Expense[], candidate: Expense): boolean => {
  const similar = expenses.filter((expense) =>
    expense.merchant.toLowerCase() === candidate.merchant.toLowerCase(),
  );

  if (similar.length < 2) {
    return false;
  }

  const intervals = similar
    .map((expense) => Math.abs(expense.timestamp - candidate.timestamp))
    .filter((interval) => interval > ONE_DAY);

  return intervals.some((interval) => interval > 25 * ONE_DAY && interval < 35 * ONE_DAY);
};
