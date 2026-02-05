import { Expense } from '../models/types';

export const saveExpense = async (expense: Expense): Promise<void> => {
  // Placeholder for encrypted storage (e.g., MMKV + encryption).
  // Never upload raw SMS content.
  console.log('Saving expense locally', expense);
};

export const loadExpenses = async (): Promise<Expense[]> => {
  return [];
};
