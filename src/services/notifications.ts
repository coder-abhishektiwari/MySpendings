import { Expense } from '../models/types';

export const sendConfirmationNotification = async (expense: Expense): Promise<void> => {
  // Placeholder for React Native push notification integration.
  console.log(`Notify: ₹${expense.amount} spent at ${expense.merchant}`);
};
