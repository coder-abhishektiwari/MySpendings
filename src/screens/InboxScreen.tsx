import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PendingTransactionCard } from '../components/PendingTransactionCard';

const mockExpense = {
  id: 'pending-1',
  amount: 250,
  currency: 'INR',
  merchant: 'Zomato',
  categoryId: 'food',
  timestamp: Date.now(),
  type: 'debit' as const,
  status: 'pending' as const,
  source: 'sms' as const,
};

export const InboxScreen: React.FC = () => (
  <View style={styles.container}>
    <PendingTransactionCard
      expense={mockExpense}
      onConfirm={() => null}
      onEdit={() => null}
      onIgnore={() => null}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20 },
});
