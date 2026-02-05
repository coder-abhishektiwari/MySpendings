import { create } from 'zustand';
import { Expense } from '../models/types';

type ExpenseState = {
  expenses: Expense[];
  pending: Expense[];
  confirmExpense: (expense: Expense) => void;
  ignoreExpense: (expenseId: string) => void;
};

export const useExpensesStore = create<ExpenseState>((set) => ({
  expenses: [],
  pending: [],
  confirmExpense: (expense) =>
    set((state) => ({
      expenses: [expense, ...state.expenses],
      pending: state.pending.filter((item) => item.id !== expense.id),
    })),
  ignoreExpense: (expenseId) =>
    set((state) => ({
      pending: state.pending.filter((item) => item.id !== expenseId),
    })),
}));
