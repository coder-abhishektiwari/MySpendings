export type TransactionType = 'debit' | 'credit';
export type ExpenseStatus = 'pending' | 'confirmed' | 'ignored';

export type Category = {
  id: string;
  name: string;
  keywords: string[];
  monthlyBudget?: number;
};

export type Expense = {
  id: string;
  amount: number;
  currency: 'INR';
  merchant: string;
  categoryId: string;
  timestamp: number;
  type: TransactionType;
  status: ExpenseStatus;
  source: 'sms' | 'manual' | 'voice';
  note?: string;
};

export type PendingDetection = {
  id: string;
  parsedExpense: Omit<Expense, 'id' | 'status'>;
  confidence: number;
  detectedAt: number;
};

export type BudgetAlert = {
  id: string;
  categoryId: string;
  threshold: 0.8 | 1.0;
  triggeredAt: number;
};
