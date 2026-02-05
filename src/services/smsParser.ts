import { Expense, TransactionType } from '../models/types';

type ParsedTransaction = Omit<Expense, 'id' | 'status' | 'categoryId'>;

const amountRegex = /(?i)(rs\.?|inr|₹)\s?([0-9]+(\.[0-9]+)?)/i;
const merchantRegex = /\b(?:at|to)\s+([A-Za-z0-9&.\- ]+)/i;
const creditRegex = /\b(credited|received)\b/i;

export const parseSms = (sms: string): ParsedTransaction | null => {
  const amountMatch = sms.match(amountRegex);
  const merchantMatch = sms.match(merchantRegex);
  const amount = amountMatch ? Number(amountMatch[2]) : null;
  const merchant = merchantMatch ? merchantMatch[1].trim() : null;

  if (!amount || !merchant) {
    return null;
  }

  const type: TransactionType = creditRegex.test(sms) ? 'credit' : 'debit';

  return {
    amount,
    currency: 'INR',
    merchant,
    timestamp: Date.now(),
    type,
    source: 'sms',
    note: '',
  };
};
