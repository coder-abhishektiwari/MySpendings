import { Category, Expense } from '../models/types';

export const defaultCategories: Category[] = [
  { id: 'food', name: 'Food', keywords: ['zomato', 'swiggy', 'restaurant'] },
  { id: 'travel', name: 'Travel', keywords: ['uber', 'ola', 'fuel'] },
  { id: 'shopping', name: 'Shopping', keywords: ['amazon', 'flipkart'] },
  { id: 'bills', name: 'Bills & Utilities', keywords: ['recharge', 'electricity', 'bill'] },
  { id: 'other', name: 'Other', keywords: [] },
];

type UserOverrides = Record<string, string>;

export const inferCategory = (
  expense: Pick<Expense, 'merchant'>,
  categories: Category[] = defaultCategories,
  overrides: UserOverrides = {},
): string => {
  const merchantKey = expense.merchant.toLowerCase();

  if (overrides[merchantKey]) {
    return overrides[merchantKey];
  }

  const matched = categories.find((category) =>
    category.keywords.some((keyword) => merchantKey.includes(keyword)),
  );

  return matched ? matched.id : 'other';
};
